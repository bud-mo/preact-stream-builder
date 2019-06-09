import { Component } from 'preact';
import { Subscription } from 'rxjs';

export const ConnectionState = {
    active: 'active',
    done: 'done',
    none: 'none',
    values: 'values',
    waiting: 'waiting'
};

export class StreamBuilder extends Component {

    constructor(props) {
        this._subscription = Subscription.EMPTY;

        this.state = {
            data: props.initialData,
            state: ConnectionState.none
        };
    }    

    componentDidMount() {
        this.setState(() => ({ state: ConnectionState.waiting }));
        this._subscription = this.props.stream.subscribe({
            next: (data) => this.setState(() => ({ data, state: ConnectionState.active })),
            error: () => {},
            complete: () => this.setState(() => ({ state: ConnectionState.done }))
        });
    }

    componentWillUnmount() {
        this._subscription.unsubscribe();
    }

    render({ builder }, snapshot) {
        return builder(snapshot);
    }

}
