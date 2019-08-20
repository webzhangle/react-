
import Mock from 'mockjs' //引入mockjs，npm已安装
import { Random } from 'mockjs' // 引入random对象,随机生成数据的对象，（与占位符@一样）
Mock.setup({
	timeout:1000  //设置请求延时时间
})
const getdata = function(option){ //定义请求数据方法
	let datalist = []
	for (let i = 0; i < 20; i += 1) {
        const o = {  //mockjs模拟随机生成数据，生成20条
            recipeId: Random.guid(),
            billId: Random.string(10),
            orgId: Random.string('number', 8, 10),
            Date:Random.date('yyyy-MM-dd'),
            time:Random.time('A HH:mm:ss'),
            adress:Random.county(),
            viewName: Random.cword(4, 16), // 随机生成任意名称
            personName: Random.cname(),
            reason: Random.csentence(10, 32),
        }
        datalist.push(o)
	}
	return{
		data:datalist
	}
}

// Mock.mock('/user', /post|get/i,getdata) //调用模拟数据方法

Mock.mock('/user', 'get',getdata) //调用模拟数据方法