interface CatalogModel {
    id: number; //主键
    code: string; //分类代码 
    catLvl1: string; //cat_lvl_1
    catLvl2: string; //cat_lvl_2
    catLvl3: string; //cat_lvl_3
    path: string; //path
    pId: number; //上级分类 
    name: string; //分类名称 
    nameCn: string; //中文分类名称 
    createdBy: string; //创建人 
    createdTime: Date; //创建时间 
    lastModifiedBy: string; //修改人 
    lastModifiedTime: Date; //修改时间 
}