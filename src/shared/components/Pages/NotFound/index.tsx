import * as React from 'react';


const title = 'Page not found.';

export class NotFound extends React.PureComponent<any, any> {
  public displayName: string = 'NotFound';

  public componentDidCatch(error: any, info: any) {
    console.error('NotFound->componentDidCatch->error', error);
    console.error('NotFound->componentDidCatch->info', info);
  }

  public render() {
    return (
      <React.Fragment>
        <div className={ this.props.className || '' }>{ title }</div>
      </React.Fragment>
    );
  }
}

export default NotFound;
