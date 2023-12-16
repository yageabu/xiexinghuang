# Java基础
Java是美国Sun（Stanford University Network，斯坦福大学网络公司）公司在1995年推出的一门计算机高级编程语言。但是在2009年是Sun公司被Oracle（甲骨文）公司给收购了，所以目前Java语言是Oracle公司所有产品。

# Java的特点
Java是一门标准，其包括JVM，在JVM基础上加上了一些类库形成了JRE，有JRE，二进制文件就可以运行了，但是我们开发还需要一些编译器，在此基础上就形成了JDK。阿里巴巴的DragonWell是一套很好的OpenJDK事实标准。

# Java的安装配置
下载JDK、安装、配置JAVA_HOME、PATH、CLASSPATH三个环境变量
变量名：JAVA_HOME		变量值：C:\Program Files (x86)\Java\jdk1.8.0_91        
// 要根据自己的实际路径配置
变量名：Path				变量值：%JAVA_HOME%\bin;%JAVA_HOME%\jre\bin;
变量名：CLASSPATH		变量值：.;%JAVA_HOME%\lib\dt.jar;%JAVA_HOME%\lib\tools.jar;         
//记得前面有个"."

# Java的开发工具
我一直在用IDEA

# Java的基本语法
关键字：系统定好的，有专门用途的，如修饰符（权限修饰符和状态修饰符，publc、private、protected）、数据类型（int、Class）、流程控制的语言等
保留字：Java以后可能会用的，如goto、rest、var…
标识符：人为去定的，如变量、方法、类、接口、包
规则：英文+数值+_$，不能数字开头、区分大小写、不能用关键字和保留字、不能包含空格
规范：类和接口XxxYyy大驼峰，包xxx.yyy，变量和方法xxxYyyZzz小驼峰，常量XXX_YYY
注释：单行注释、多行注释、文档注释
