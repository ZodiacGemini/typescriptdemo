import Next from '../components/nextComponent/next';
import * as actions from '../actions/next';
import { NextStoreState } from '../types/next';
import { connect, Dispatch } from 'react-redux';

export function mapStateToProps({color}: NextStoreState) {
    return {
        color: color,
    }
}

export function mapDispatchToProps(dispatch: Dispatch<actions.ToggleColor>) {
    return {
        toggleColor: () => dispatch(actions.toggleColor()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Next);