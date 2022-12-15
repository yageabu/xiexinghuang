# 第一个Servlet
## Servlet是SUN公司定义的一个接口，是一门动态Web技术
## 开发Servlet的两个步骤：
	定义一个类，实现Servlet接口，重写service()方法，用于接收Request和Response对象
	Sun公司制定了两个实现类HttpServlet和GenericServlet（父），所以我们继承这两个类就相当于继承了Servlet接口。
	我们要重写HttpServlet的doGet()和doPost()
## 写Servlet映射
	在web.xml中的<servlet>注册包的全限定名，在<servlet-mapping>配置访问路径，（如果配置通配符/*）Servlet优先级会高于index.jsp文件
	用固定后缀如*.do，前面不能加/（*号前不能加映射路径）
	固定路径优先级大于通用路径

## 导入Servlet Maven依赖
```xml
        <!--        Servlet依赖-->
        <dependency>
            <groupId>javax.servlet</groupId>
            <artifactId>javax.servlet-api</artifactId>
            <version>3.1.0</version>
            <scope>provided</scope>
        </dependency>
        <!--        JSP依赖-->
        <dependency>
            <groupId>javax.servlet.jsp</groupId>
            <artifactId>javax.servlet.jsp-api</artifactId>
            <version>2.3.3</version>
            <scope>provided</scope>
        </dependency>
        <!--        jstl表达式的依赖-->
        <dependency>
            <groupId>javax.servlet</groupId>
            <artifactId>jstl</artifactId>
            <version>1.2</version>
        </dependency>
        <!--        standar标签库-->
        <dependency>
            <groupId>taglibs</groupId>
            <artifactId>standard</artifactId>
            <version>1.1.2</version>
        </dependency>

```

## 在配置好环境以后，我们就可以写我们的Servlet代码了
```java
package com.xiexinghuang.servlet;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

public class HelloServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        resp.setContentType("text/html");
        resp.setCharacterEncoding("UTF-8");
        PrintWriter writer = resp.getWriter(); //响应流
        writer.print("<h1>你好，Servlet</h1>");
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
//        super.doPost(req, resp);
        doGet(req, resp);
    }
}
```

## 配置web.xml映射
```xml
<servlet>
        <!-- Servlet别名 -->
        <servlet-name>hello</servlet-name>
        <servlet-class>com.xiexinghuang.servlet.HelloServlet</servlet-class>
    </servlet>

    <!-- 将Servlet和URL绑定 -->
    <servlet-mapping>
        <servlet-name>hello</servlet-name>
        <url-pattern>/hello</url-pattern>
    </servlet-mapping>

```
## Servlet执行流程(生命周期)
![Servlet生命周期](/assets/img/Servlet生命周期.png)

按照功能的不同，大致可以将 Servlet 的生命周期分为三个阶段，分别是初始化阶段、运行阶段和销毁阶段。

1）初始化阶段
当客户端向 Servlet 容器发出 HTTP 请求要求访问 Servlet 时，Servlet 容器首先会解析请求，检查内存中是否已经有了该 Servlet 对象，如果有，则直接使用该 Servlet 对象，如果没有，则创建 Servlet 实例对象，然后通过调用 init() 方法实现 Servlet 的初始化工作。需要注意的是，在 Servlet 的整个生命周期内，它的 init() 方法只能被调用一次。

2）运行阶段
这是 Servlet 生命周期中最重要的阶段，在这个阶段中，Servlet 容器会为这个请求创建代表 HTTP 请求的 ServletRequest 对象和代表 HTTP 响应的 ServletResponse 对象，然后将它们作为参数传递给 Servlet 的 service() 方法。

service() 方法从 ServletRequest 对象中获得客户请求信息并处理该请求，通过 ServletResponse 对象生成响应结果。

在 Servlet 的整个生命周期内，对于 Servlet 的每一次访问请求，Servlet 容器都会调用一次 Servlet 的 service() 方法，并且创建新的 ServletRequest 和 ServletResponse 对象，也就是说，service() 方法在 Servlet 的整个生命周期中会被调用多次。

3）销毁阶段
当服务器关闭或 Web 应用被移除出容器时，Servlet 随着 Web 应用的关闭而销毁。在销毁 Servlet 之前，Servlet 容器会调用 Servlet 的 destroy() 方法，以便让 Servlet 对象释放它所占用的资源。在 Servlet 的整个生命周期中，destroy() 方法也只能被调用一次。

需要注意的是，Servlet 对象一旦创建就会驻留在内存中等待客户端的访问，直到服务器关闭或 Web 应用被移除出容器时，Servlet 对象才会销毁。

## ServletContext应用
### 共享数据
ServletContext是所有Servlet共用的对象，可以用来共享数据
在A Servlet中创建并赋值
```java
ServletContext context = getServletContext();
String name = "阿BU";
context.setAttribute("username",name);
```

在B Servlet中可以取出来，但是A要先被访问到且创建出来
```java
ServletContext context = getServletContext();
String username = (String) context.getAttribute("username");
```

### 获取初始化参数
context.getInitParameter("xxx")：可以获取到web.xml的配置信息
![Servlet-获取初始化参数](/assets/img/Servlet-获取初始化参数.png)

### 请求转发
context.getRequestDispatcher("/xxx").forward(req,resp)：请求转发到其他servlet，不是重定向


### 获取资源路径
context.getResourceAsStream("打包后的相对路径")
![Servlet-获取资源路径](/assets/img/Servlet-获取资源路径.png)

## Tips：程序入口
在一个web项目中，我们好像没有看到java程序中眼熟的public static void main作为程序执行的入口，由虚拟机调用。
那么web项目中到底存在main吗？
答案是肯定的，只不过main并不由我们写，容器提供了。
比如我们的项目部署到Tomcat容器，main()在Tomcat的BootStrap类里面，web应用启动是不会执行类中的main方法的，只会调用Tomcat的main，然后通过web.xml的配置去加载其它类，我们平时写的main()，只是用来测试用的
位置：d:\apache-tomcat-7.0.105\bin\bootstrap.jar
![Servlet-程序入口](/assets/img/Servlet-程序入口.png)

所以说我们写的代码 + Tomcat才是完整的一个程序。
虽然开发人员可以在类中写main方法用于测试，但是对于整个程序的执行流程没有影响。
