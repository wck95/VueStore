import axios from 'axios'

export function request(config){
 
  //1. 创建axios实例
  const instance = axios.create({
    //baseURL: 'http://123.207.32.32:8000/api/hy',
     baseURL: 'http://106.54.54.237:8000/api/hy',//备用服务器
    timeout: 5000,
  });

  //2. 配置axios的拦截器
  // 2.1请求拦截的作用
  instance.interceptors.request.use(config => {
    return config ;
  }, err => {
    console.log("interceptors.request--->error");
  }) ;

  //2.2 响应拦截器
  instance.interceptors.response.use(res => {
    return res.data;
  }, err => {
    console.log("interceptors.response--->error");
  });

  //3. 发送真正的网络请求
  return instance(config);
}