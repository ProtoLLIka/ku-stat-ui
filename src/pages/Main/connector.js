import { connect } from 'react-redux';

import { actions, selectors } from 'store/slice';

import View from './view';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = {
};

const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(View);

export default ConnectedComponent;
