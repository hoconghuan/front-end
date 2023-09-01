// 引入组件
import Count from '../components/Count/index'
import { incrementActon, decrementActon } from '../redux/count_action';

// 引入 react-redux中的 connect 方法
import { connect } from 'react-redux';

export default connect((state) => {
    return { count: state }
}
    , {
        increment: incrementActon,
        decrement: decrementActon
    }
)(Count)