import { Hero,Contact,Incident,Role,InformType,Parm,JobType } from './hero';
export const ROLES: Role[] = [
{  id: 1,  role: 'Team Member'}, 
{  id: 2,  role: 'Team Leader'}, 
{  id: 3,  role: 'Team Manager'}, 
{  id: 4,  role: 'Project Manager'}
];

export const INFORMTYPES: InformType[] = [
{  informType: 0,  typeDes: 'Using SMS'}, 
{  informType: 1,  typeDes: 'Using Email'}
];

export const JOBTYPES: JobType[] = [
{  id: 1,  typeDes: 'Low'}, 
{  id: 2,  typeDes: 'Medium'},
{  id: 3,  typeDes: 'High'}
];

export const PARMS: Parm[] = [
{appId:0,createTime:"2016-11-18 17:06:37",id:1,jobCode:"SRZ001",modelState:"NORMAL",priority:2,updateTime:"2016-11-18 17:06:37"}
];

export const CONTACTS: Contact[] = [

{  id: 1,  name: 'Michael',InformType:0, cellphone: '15071371245',  telephone: '027-87431467',  City: 'Wuhan', Email:'', role_id:1,Role: 'Team Member'},
{  id: 2,  name: 'Dean',InformType:0,  cellphone: '17783575857',  telephone: '027-87431467',  City: 'Chongqing', Email:'', role_id:1,Role: 'Team Member'},
{  id: 3,  name: 'Jan',InformType:0,  cellphone: '15927127864',  telephone: '027-87431467',  City: 'Wuhan', Email:'', role_id:1,Role: 'Team Member'},
{  id: 4,  name: 'Janet',InformType:0,  cellphone: '15872360218',  telephone: '027-87431467',  City: 'Wuhan', Email:'', role_id:1,Role: 'Team Member'},
{  id: 5,  name: 'Tom',InformType:0,  cellphone: '18602745012',  telephone: '027-87431467',  City: 'Wuhan', Email:'',role_id:1, Role: 'Team Member'}];
export const INCIDENTS: Incident[] = [
{  id: 1,  incname: 'INC012345678912',  incdes: 'ISIGNUM Issue',  incpriority: 'High',  inccall: '15071371245',inccall_name: 'Michael', inccalltime:'2016/10/10 00:00:01', inctime: '2016/10/10 00:00:01'},
];

// export const HEROES: Hero[] = [
// {id:1,name:'Michael',shift:'',oncall:'15071371245',shiftcall:'',date:'2016/10/1',weekday:'Sat'},
// {id:2,name:'Michael',shift:'',oncall:'15071371245',shiftcall:'',date:'2016/10/2',weekday:'Sun'},
// {id:3,name:'Janet',shift:'Tom',oncall:'123456789',shiftcall:'234567890',date:'2016/10/3',weekday:'Mon'},
// {id:4,name:'Janet',shift:'Michael',oncall:'123456789',shiftcall:'15071371245',date:'2016/10/4',weekday:'Tue'},
// {id:5,name:'Jan',shift:'Michael',oncall:'15927127864',shiftcall:'15071371245',date:'2016/10/5',weekday:'Wed'},
// {id:6,name:'Jan',shift:'Michael',oncall:'15927127864',shiftcall:'15071371245',date:'2016/10/6',weekday:'Thu'},
// {id:7,name:'Jacky',shift:'Dean',oncall:'13916766757',shiftcall:'13617677335',date:'2016/10/7',weekday:'Fri'},
// {id:8,name:'Dean',shift:'',oncall:'13617677335',shiftcall:'',date:'2016/10/8',weekday:'Sat'},
// {id:9,name:'Dean',shift:'',oncall:'13617677335',shiftcall:'',date:'2016/10/9',weekday:'Sun'},
// {id:10,name:'Dean',shift:'Jan',oncall:'13617677335',shiftcall:'15927127864',date:'2016/10/10',weekday:'Mon'},
// {id:11,name:'Dean',shift:'Jan',oncall:'13617677335',shiftcall:'15927127864',date:'2016/10/11',weekday:'Tue'},
// {id:12,name:'Dean',shift:'Jan',oncall:'13617677335',shiftcall:'15927127864',date:'2016/10/12',weekday:'Wed'},
// {id:13,name:'Dean',shift:'Jan',oncall:'13617677335',shiftcall:'15927127864',date:'2016/10/13',weekday:'Thu'},
// {id:14,name:'Dean',shift:'Jan',oncall:'13617677335',shiftcall:'15927127864',date:'2016/10/14',weekday:'Fri'},
// {id:15,name:'Dean',shift:'',oncall:'13617677335',shiftcall:'',date:'2016/10/15',weekday:'Sat'},
// {id:16,name:'Dean',shift:'',oncall:'13617677335',shiftcall:'',date:'2016/10/16',weekday:'Sun'},
// {id:17,name:'Jan',shift:'Janet',oncall:'15927127864',shiftcall:'123456789',date:'2016/10/17',weekday:'Mon'},
// {id:18,name:'Jan',shift:'Janet',oncall:'15927127864',shiftcall:'123456789',date:'2016/10/18',weekday:'Tue'},
// {id:19,name:'Jan',shift:'Janet',oncall:'15927127864',shiftcall:'123456789',date:'2016/10/19',weekday:'Wed'},
// {id:20,name:'Jan',shift:'Janet',oncall:'15927127864',shiftcall:'123456789',date:'2016/10/20',weekday:'Thu'},
// {id:21,name:'Jan',shift:'Janet',oncall:'15927127864',shiftcall:'123456789',date:'2016/10/21',weekday:'Fri'},
// {id:22,name:'Jan',shift:'',oncall:'15927127864',shiftcall:'',date:'2016/10/22',weekday:'Sat'},
// {id:23,name:'Jan',shift:'',oncall:'15927127864',shiftcall:'',date:'2016/10/23',weekday:'Sun'},
// {id:24,name:'Janet',shift:'Michael',oncall:'123456789',shiftcall:'15071371245',date:'2016/10/24',weekday:'Mon'},
// {id:25,name:'Janet',shift:'Michael',oncall:'123456789',shiftcall:'15071371245',date:'2016/10/25',weekday:'Tue'},
// {id:26,name:'Janet',shift:'Michael',oncall:'123456789',shiftcall:'15071371245',date:'2016/10/26',weekday:'Wed'},
// {id:27,name:'Janet',shift:'Michael',oncall:'123456789',shiftcall:'15071371245',date:'2016/10/27',weekday:'Thu'},
// {id:28,name:'Janet',shift:'Michael',oncall:'123456789',shiftcall:'15071371245',date:'2016/10/28',weekday:'Fri'},
// {id:29,name:'Janet',shift:'',oncall:'123456789',shiftcall:'',date:'2016/10/29',weekday:'Sat'},
// {id:30,name:'Janet',shift:'',oncall:'123456789',shiftcall:'',date:'2016/10/30',weekday:'Sun'},
// {id:31,name:'Michael',shift:'Dean',oncall:'15071371245',shiftcall:'13617677335',date:'2016/10/31',weekday:'Mon'},
// {id:1,name:'Michael',shift:'',oncall:'15071371245',shiftcall:'',date:'2016/09/1',weekday:'Sat'},
// {id:2,name:'Michael',shift:'',oncall:'15071371245',shiftcall:'',date:'2016/09/2',weekday:'Sun'},
// {id:3,name:'Janet',shift:'Tom',oncall:'123456789',shiftcall:'234567890',date:'2016/09/3',weekday:'Mon'},
// {id:4,name:'Janet',shift:'Michael',oncall:'123456789',shiftcall:'15071371245',date:'2016/09/4',weekday:'Tue'},
// {id:5,name:'Jan',shift:'Michael',oncall:'15927127864',shiftcall:'15071371245',date:'2016/09/5',weekday:'Wed'},
// {id:6,name:'Jan',shift:'Michael',oncall:'15927127864',shiftcall:'15071371245',date:'2016/09/6',weekday:'Thu'},
// {id:7,name:'Jacky',shift:'Dean',oncall:'13916766757',shiftcall:'13617677335',date:'2016/09/7',weekday:'Fri'},
// {id:8,name:'Dean',shift:'',oncall:'13617677335',shiftcall:'',date:'2016/09/8',weekday:'Sat'},
// {id:9,name:'Dean',shift:'',oncall:'13617677335',shiftcall:'',date:'2016/09/9',weekday:'Sun'},
// {id:10,name:'Dean',shift:'Jan',oncall:'13617677335',shiftcall:'15927127864',date:'2016/09/10',weekday:'Mon'},
// {id:11,name:'Dean',shift:'Jan',oncall:'13617677335',shiftcall:'15927127864',date:'2016/09/11',weekday:'Tue'},
// {id:12,name:'Dean',shift:'Jan',oncall:'13617677335',shiftcall:'15927127864',date:'2016/09/12',weekday:'Wed'},
// {id:13,name:'Dean',shift:'Jan',oncall:'13617677335',shiftcall:'15927127864',date:'2016/09/13',weekday:'Thu'},
// {id:14,name:'Dean',shift:'Jan',oncall:'13617677335',shiftcall:'15927127864',date:'2016/09/14',weekday:'Fri'},
// {id:15,name:'Dean',shift:'',oncall:'13617677335',shiftcall:'',date:'2016/09/15',weekday:'Sat'},
// {id:16,name:'Dean',shift:'',oncall:'13617677335',shiftcall:'',date:'2016/09/16',weekday:'Sun'},
// {id:17,name:'Jan',shift:'Janet',oncall:'15927127864',shiftcall:'123456789',date:'2016/09/17',weekday:'Mon'},
// {id:18,name:'Jan',shift:'Janet',oncall:'15927127864',shiftcall:'123456789',date:'2016/09/18',weekday:'Tue'},
// {id:19,name:'Jan',shift:'Janet',oncall:'15927127864',shiftcall:'123456789',date:'2016/09/19',weekday:'Wed'},
// {id:20,name:'Jan',shift:'Janet',oncall:'15927127864',shiftcall:'123456789',date:'2016/09/20',weekday:'Thu'},
// {id:21,name:'Jan',shift:'Janet',oncall:'15927127864',shiftcall:'123456789',date:'2016/09/21',weekday:'Fri'},
// {id:22,name:'Jan',shift:'',oncall:'15927127864',shiftcall:'',date:'2016/09/22',weekday:'Sat'},
// {id:23,name:'Jan',shift:'',oncall:'15927127864',shiftcall:'',date:'2016/09/23',weekday:'Sun'},
// {id:24,name:'Janet',shift:'Michael',oncall:'123456789',shiftcall:'15071371245',date:'2016/09/24',weekday:'Mon'},
// {id:25,name:'Janet',shift:'Michael',oncall:'123456789',shiftcall:'15071371245',date:'2016/09/25',weekday:'Tue'},
// {id:26,name:'Janet',shift:'Michael',oncall:'123456789',shiftcall:'15071371245',date:'2016/09/26',weekday:'Wed'},
// {id:27,name:'Janet',shift:'Michael',oncall:'123456789',shiftcall:'15071371245',date:'2016/09/27',weekday:'Thu'},
// {id:28,name:'Janet',shift:'Michael',oncall:'123456789',shiftcall:'15071371245',date:'2016/09/28',weekday:'Fri'},
// {id:29,name:'Janet',shift:'',oncall:'123456789',shiftcall:'',date:'2016/09/29',weekday:'Sat'},
// {id:30,name:'Janet',shift:'',oncall:'123456789',shiftcall:'',date:'2016/09/30',weekday:'Sun'},
// {id:31,name:'Michael',shift:'Dean',oncall:'15071371245',shiftcall:'13617677335',date:'2016/09/31',weekday:'Mon'},
// {id:1,name:'Michael',shift:'',oncall:'15071371245',shiftcall:'',date:'2016/11/1',weekday:'Sat'},
// {id:2,name:'Michael',shift:'',oncall:'15071371245',shiftcall:'',date:'2016/11/2',weekday:'Sun'},
// {id:3,name:'Janet',shift:'Tom',oncall:'123456789',shiftcall:'234567890',date:'2016/11/3',weekday:'Mon'},
// {id:4,name:'Janet',shift:'Michael',oncall:'123456789',shiftcall:'15071371245',date:'2016/11/4',weekday:'Tue'},
// {id:5,name:'Jan',shift:'Michael',oncall:'15927127864',shiftcall:'15071371245',date:'2016/11/5',weekday:'Wed'},
// {id:6,name:'Jan',shift:'Michael',oncall:'15927127864',shiftcall:'15071371245',date:'2016/11/6',weekday:'Thu'},
// {id:7,name:'Jacky',shift:'Dean',oncall:'13916766757',shiftcall:'13617677335',date:'2016/11/7',weekday:'Fri'},
// {id:8,name:'Dean',shift:'',oncall:'13617677335',shiftcall:'',date:'2016/11/8',weekday:'Sat'},
// {id:9,name:'Dean',shift:'',oncall:'13617677335',shiftcall:'',date:'2016/11/9',weekday:'Sun'},
// {id:10,name:'Dean',shift:'Jan',oncall:'13617677335',shiftcall:'15927127864',date:'2016/11/10',weekday:'Mon'},
// {id:11,name:'Dean',shift:'Jan',oncall:'13617677335',shiftcall:'15927127864',date:'2016/11/11',weekday:'Tue'},
// {id:12,name:'Dean',shift:'Jan',oncall:'13617677335',shiftcall:'15927127864',date:'2016/11/12',weekday:'Wed'},
// {id:13,name:'Dean',shift:'Jan',oncall:'13617677335',shiftcall:'15927127864',date:'2016/11/13',weekday:'Thu'},
// {id:14,name:'Dean',shift:'Jan',oncall:'13617677335',shiftcall:'15927127864',date:'2016/11/14',weekday:'Fri'},
// {id:15,name:'Dean',shift:'',oncall:'13617677335',shiftcall:'',date:'2016/11/15',weekday:'Sat'},
// {id:16,name:'Dean',shift:'',oncall:'13617677335',shiftcall:'',date:'2016/11/16',weekday:'Sun'},
// {id:17,name:'Jan',shift:'Janet',oncall:'15927127864',shiftcall:'123456789',date:'2016/11/17',weekday:'Mon'},
// {id:18,name:'Jan',shift:'Janet',oncall:'15927127864',shiftcall:'123456789',date:'2016/11/18',weekday:'Tue'},
// {id:19,name:'Jan',shift:'Janet',oncall:'15927127864',shiftcall:'123456789',date:'2016/11/19',weekday:'Wed'},
// {id:20,name:'Jan',shift:'Janet',oncall:'15927127864',shiftcall:'123456789',date:'2016/11/20',weekday:'Thu'},
// {id:21,name:'Jan',shift:'Janet',oncall:'15927127864',shiftcall:'123456789',date:'2016/11/21',weekday:'Fri'},
// {id:22,name:'Jan',shift:'',oncall:'15927127864',shiftcall:'',date:'2016/11/22',weekday:'Sat'},
// {id:23,name:'Jan',shift:'',oncall:'15927127864',shiftcall:'',date:'2016/11/23',weekday:'Sun'},
// {id:24,name:'Janet',shift:'Michael',oncall:'123456789',shiftcall:'15071371245',date:'2016/11/24',weekday:'Mon'},
// {id:25,name:'Janet',shift:'Michael',oncall:'123456789',shiftcall:'15071371245',date:'2016/11/25',weekday:'Tue'},
// {id:26,name:'Janet',shift:'Michael',oncall:'123456789',shiftcall:'15071371245',date:'2016/11/26',weekday:'Wed'},
// {id:27,name:'Janet',shift:'Michael',oncall:'123456789',shiftcall:'15071371245',date:'2016/11/27',weekday:'Thu'},
// {id:28,name:'Janet',shift:'Michael',oncall:'123456789',shiftcall:'15071371245',date:'2016/11/28',weekday:'Fri'},
// {id:29,name:'Janet',shift:'',oncall:'123456789',shiftcall:'',date:'2016/11/29',weekday:'Sat'},
// {id:30,name:'Janet',shift:'',oncall:'123456789',shiftcall:'',date:'2016/11/30',weekday:'Sun'},
// {id:31,name:'Michael',shift:'Dean',oncall:'15071371245',shiftcall:'13617677335',date:'2016/10/31',weekday:'Mon'}
// ];