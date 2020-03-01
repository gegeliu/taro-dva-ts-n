import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import { connect } from '@tarojs/redux';
import './index.scss'

// #region 书写注意
//
// 目前 typescript 版本还无法在装饰器模式下将 Props 注入到 Taro.Component 中的 props 属性
// 需要显示声明 connect 的参数类型并通过 interface 的方式指定 Taro.Component 子类的 props
// 这样才能完成类型检查和 IDE 的自动提示
// 使用函数模式则无此限制
// ref: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/20796
//
// #endregion

interface DvaProps {
  dispatch: Function
  flag: number
}
interface PageProps {
}
type IProps = DvaProps & PageProps

type PageState = {
  // 通常用做临时变量 和 model中的state不同
  count:number,
}

@connect(({ home,common,loading }) => ({
  ...common,
  ...home,
  ...loading,
}))
export default class Index extends Component<IProps,PageState> {
  constructor (props) {
    super(props)
    this.state = {
      count:0,
    }
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '首页'
  }  

  onClick = (e:any)=> {
    console.log("onClick incoming")
    console.log(e)
    this.props.dispatch({ 
      type : 'home/load'
    })
    this.setState({count:this.state.count+1})
  }

  render () {
    const { flag }= this.props
    console.log("home render "+flag)
    return (
      <View className='index'>
        <Text>Hello world! count is:{ this.state.count } flag is: { flag }</Text>
        <Button onClick={this.onClick}> click </Button>
      </View>
    )
  }
}
