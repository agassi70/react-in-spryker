import { connect } from 'react-redux';

export const reduxify = (
  mapStateToProps: Function,
  mapDispatchToProps?: Function,
  mergeProps?: any,
  options?: any,
) => (target: any) => connect(
  mapStateToProps as any,
  mapDispatchToProps as any,
  mergeProps,
  options,
)(target) as any;
