import { Component } from 'inferno';

export default function withLoading(WrappedComponent, Loader = null) {
  return class WithLoading extends Component {
    render() {
      const { isLoading, ...restProps } = this.props;

      return isLoading
        ? <Loader />
        : <WrappedComponent {...restProps} />
    }
  }
};