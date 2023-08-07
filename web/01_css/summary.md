# 关于精灵图的总结

1、精灵图的本质是用div盒子显示背景图片，让对应背景图片分别显示。 要注意精灵图的盒子一定要有宽高，   然后就是一个精灵小图一个坑。 每个div用横向、纵向的方式对应每个精灵图。  一般为  前缀 ul:nth-child(X) li:nth-child(X) 表示 ，里面为 background-position： 对应X,Y的坐标，比如  background-position: 0 0;
