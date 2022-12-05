---
home: true
---

# 关于我
本人大学毕业后第一份工作是在电信从事客户服务工作，主要是在主营业厅和客户服务部门，期间接受了关于销售管理和客户服务的培训，尤其是关于客户投诉管理的学习。这帮助我打下了良好的沟通的基础。后在苹果授权店工作期间，苹果产品培训、销售培训以及苹果公司的文化使我对IT行业产生了浓厚的兴趣。
所以本人选择了在IT运维（IT支持）方向发展，第一个项目是餐饮IT搭建及维护工作，这份工作让我具备了企业硬件维护和系统的使用能力，对餐饮和目前的市场也有了自己的认识。第二个项目是互联网餐饮外卖平台的创业公司工作，比较正式地认识了互联网公司的文化和工作模式，工作的期间还帮助公司新职场搭建机房和网络。第三个项目是在平安担任IT支持岗，让我对金融公司的IT架构有了不错的认识。本人喜欢利用业余时间在技术及项目管理两个方面开始自学。对计算机网络、互联网和金融、IT项目都有了不错的了解，希望能对以后的工作有所帮助。
事业格言：保持学习的心态，尽心做好每一件事。

# 如何使用？
根据“使用”的所指含义的不同，笔者列举以下几种情况：

在线阅读：本文档在线阅读地址为：https://icyfenix.cn。
网站由 GitHub Pages 提供网站存储空间；由 Travis-CI 提供的持续集成服务实时把 Git 仓库的 Markdown 文档编译同步至网站，并推送至 CDN，提供国内的访问加速。

离线阅读：

部署离线站点：文档基于 Vuepress 构建，如你希望在企业内部搭建文档站点，请使用如下命令：

# 克隆获取源码
$ git clone https://github.com/fenixsoft/awesome-fenix.git && cd awesome-fenix

# 安装工程依赖
$ npm install

# 运行网站，地址默认为http://localhost:8080
$ npm run dev
生成PDF文件：工程源码中已带有基于 vuepress-plugin-export 改造（针对本文档定制过）的PDF导出插件，如你希望生成全文 PDF 文件，请在已进行上一步工程克隆和依赖安装的前提下使用如下命令：

# 编译PDF，结果将输出在网站根目录
$ npm run export
PDF 全文编译时间较长，在笔者机器上约耗时25分钟，在 Travis-CI 上约需要约8分钟，可以从在这里下载更新时由 Travis-CI 自动编译的PDF。PDF 中文字体采用阿里巴巴普惠字体渲染，此字体被允许免费使用与传播。

二次演绎、传播和发行：本文档中所有的内容，如引用其他资料，均在文档中明确列出资料来源，一切权利归属原作者。除此以外的所有内容，包括但不限于文字、图片、表格，等等，均属笔者原创，这些原创内容，笔者声明以知识共享署名 4.0发行，只要遵循许可协议条款中署名、非商业性使用、相同方式共享的条件，你可以在任何地方、以任何形式、向任何人使用、修改、演绎、传播本文档中任何部分的内容。详细可见本文档的“协议”一节。

运行技术演示工程：笔者专门在探索起步中的“技术演示工程”详细介绍了配套工程的使用方法，如果你对构建运行环境也有所疑问，在附录中的“环境依赖”部分也已包括了详细的环境搭建步骤。此外，这些配套工程也均有使用 Travis-CI 提供的持续集成服务，自动输出到 Docker 镜像库，如果你只关心运行效果，或只想了解部分运维方面的知识，可以直接运行 Docker 镜像而无需关心代码部分。你可以通过下面所列的地址，查看到本文档所有工程代码和在线演示的地址：

# 文档工程：
凤凰架构：https://icyfenix.cn
Vuepress 支持的文档工程：https://github.com/fenixsoft/awesome-fenix
前端工程：
Mock.js 支持的纯前端演示：https://bookstore.icyfenix.cn
Vue.js 2实现前端工程：https://github.com/fenixsoft/fenix-bookstore-frontend
后端工程：
Spring Boot 实现单体架构：https://github.com/fenixsoft/monolithic_arch_springboot
Spring Cloud 实现微服务架构：https://github.com/fenixsoft/microservice_arch_springcloud
Kubernetes 为基础设施的微服务架构：https://github.com/fenixsoft/microservice_arch_kubernetes
Istio 为基础设施的服务网格架构：https://github.com/fenixsoft/servicemesh_arch_istio
AWS Lambda 为基础的无服务架构：https://github.com/fenixsoft/serverless_arch_awslambda
协议
本作品代码部分采用 Apache 2.0协议进行许可。遵循许可的前提下，你可以自由地对代码进行修改，再发布，可以将代码用作商业用途。但要求你：

署名：在原有代码和衍生代码中，保留原作者署名及代码来源信息。
保留许可证：在原有代码和衍生代码中，保留Apache 2.0协议文件。
本作品文档部分采用知识共享署名 4.0 国际许可协议进行许可。 遵循许可的前提下，你可以自由地共享，包括在任何媒介上以任何形式复制、发行本作品，亦可以自由地演绎、修改、转换或以本作品为基础进行二次创作。但要求你：

署名：应在使用本文档的全部或部分内容时候，注明原作者及来源信息。
非商业性使用：不得用于商业出版或其他任何带有商业性质的行为。如需商业使用，请联系作者。
相同方式共享的条件：在本文档基础上演绎、修改的作品，应当继续以知识共享署名 4.0国际许可协议进行许可。
# 备案
网站备案信息：粤ICP备18088957号


::: slot footer
MIT Licensed | Copyright © 2018-present   [在Github主页上给我留言](https://yageabu.github.io/runningboy/)
:::