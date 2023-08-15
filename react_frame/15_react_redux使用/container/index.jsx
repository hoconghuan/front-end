// 引入组件
import Count from '../components/Count'
import { incrementActon, decrementActon } from '../redux/count_action';

// 引入 react-redux中的 connect 方法
import { connect } from 'react-redux';

function mapStateProps(state) {
    return { count: state }
}

function mapActionProps(dispatch) {
    return {
        increment: (number) => { dispatch(incrementActon(number)) },
        decrement: (number) => { dispatch(decrementActon(number)) }
    }
}

export default connect(mapStateProps, mapActionProps)(Count)