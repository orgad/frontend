interface ImportTmplD {
    id: number; //主键
    tmplId: number; //模板Id
    colCode: string; //字段名
    colName: string; //字段中文
    dataType: string; //字段数据类型
    defaultValue:string;//默认值
    isDeleted: boolean; //是否删除
    createdBy: string; //创建人
    createdTime: Date; //创建时间
    lastModifiedBy: string; //修改人
    lastModifiedtime: Date; //修改时间
}