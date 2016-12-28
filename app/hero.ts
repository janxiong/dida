export class Hero {
  id: number;
  name: string;
  shift_id: number;
  oncall_id: number;
  shift: string;
  oncall: string;
  shiftcall: string; 
  date: string;
  weekday: string; 
}

export class Role {
  id: number;
  role: string; 
}

export class InformType {
  informType: number;
  typeDes: string; 
}

export class JobType {
  id: number;
  typeDes: string; 
}

export class Parm {
  id: number;
  jobCode: string;
  modelState: string;
  priority: number;
  updateTime: string;
  createTime: string;
  appId: number;
}

export class Contact {
  id: number;
  name: string;
  cellphone: string;
  telephone: string;
  Email: string;
  InformType: number;
  City: string;
  role_id:number;
  Role: string; 
}

export class Incident {
  id: number;
  incname: string;
  incdes: string;
  incpriority: string;
  inccall: string;
  inccall_name: string;
  inccalltime: string;
  inctime: string; 
}