import * as React from 'react';


interface IState {
  hasError: boolean;
  error: any;
  info: any;
}

export class ErrorBoundary extends React.PureComponent<any, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      info: null,
    };
  }

  public componentDidCatch(error: any, info: any) {
    // Display fallback UI
    this.setState({hasError: true, error, info});
    console.error('ErrorBoundary->componentDidCatch->error', error);
    console.error('ErrorBoundary->componentDidCatch->info', info);
  }

  public render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>{ this.state.error.toString() }</h1>;
    }
    return this.props.children;
  }
}
