export interface ApiShow{
  id:number;
  image:{medium:string}
  name:string;
  summary:string;
}

export interface Show{
  id:number;
  image:string
  name:string;
  summary:string;
}

export interface ApiSearchItem{
  id:number;
  name:string;
}

export interface ApiSearch{
  score:number;
  show:ApiShow;
}