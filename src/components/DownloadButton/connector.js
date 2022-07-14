import { connect } from 'react-redux';

import View from './view';

const mapStateToProps = (state) => ({
});

const ConnectedComponent = connect(mapStateToProps)(View);

export default ConnectedComponent;
