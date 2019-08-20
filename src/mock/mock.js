
import Mock from 'mockjs' //引入mockjs，npm已安装
import { Random } from 'mockjs' // 引入random对象,随机生成数据的对象，（与占位符@一样）
Mock.setup({
	timeout:1000  //设置请求延时时间
})
const getdata = function(option){ //定义请求数据方法
	let datalist = []
	for (let i = 0; i < 20; i += 1) {
        const o = {  //mockjs模拟随机生成数据，生成20条
            'Boolean': Random.boolean, // 可以生成基本数据类型
            'Natural': Random.natural(1, 10), // 生成1到100之间自然数
            'Integer': Random.integer(1, 100), // 生成1到100之间的整数
            'Float': Random.float(0, 100, 0, 5), // 生成0到100之间的浮点数,小数点后尾数为0到5位
            'Character': Random.character(), // 生成随机字符串,可加参数定义规则
            'String': Random.string(2, 10), // 生成2到10个字符之间的字符串
            'Range': Random.range(0, 10, 2), // 生成一个随机数组
            // 'Date': Random.date(), // 生成一个随机日期,可加参数定义日期格式
            'Image': Random.image(Random.size, '#02adea', 'Hello'), // Random.size表示将从size数据中任选一个数据
            'Color': Random.color(), // 生成一个颜色随机值
            'Paragraph':Random.paragraph(2, 5), //生成2至5个句子的文本
            'Name': Random.name(), // 生成姓名
            'Url': Random.url(), // 生成web地址
            'Address': Random.province(), // 生成地址

            'recipeId': Random.guid(),
            'billId': Random.string(10),
            'orgId': Random.string('number', 8, 10),
            'Date':Random.date('yyyy-MM-dd'),
            'time':Random.time('A HH:mm:ss'),
            'adress':Random.county(),
            'viewName': Random.cword(4, 16), // 随机生成任意名称
            'personName': Random.cname(),
            'reason': Random.csentence(10, 32),
        }
        datalist.push(o)
	}
	return{
		data:datalist
	}
}

// Mock.mock('/user', /post|get/i,getdata) //调用模拟数据方法
Mock.mock('/user', 'post',getdata) //调用模拟数据方法