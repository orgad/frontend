interface ImportTmplModel {
    id: number; //主键
    stId: number; //策略
    code: string; //模板代码
    typeCode: string; //模板类型
    isDeleted: boolean; //是否删除
    createdBy: string; //创建人
    createdTime: Date; //创建时间
    lastModifiedBy: string; //修改人
    lastModifiedTime: Date; //修改时间
}