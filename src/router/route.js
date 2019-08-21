import Index from '../pages/index';
import List from '../pages/list';
import a from '../pages/a'
var routers = []
export default routers = [
    {
        path: '/index',
        component: Index,
        exact: true //精确制导
    },
    {
        path: '/list',
        component: List,
        childrens: [
            {
                path: '/list',
                component: a, //component 不能与父元素重名即不能叫 List
            },
            {
                path: '/list/a',
                component: a,
            }
        ]
    }
]