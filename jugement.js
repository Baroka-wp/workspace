// fonction pour attribuer les scores A,B, C, D
function get_achievement(points){
  let sum = 0;
  for(let i=0; i<number; i++){
    sum += points[i];
  }

  if (sum>=number*80){
    return "A";
  }
  else if (sum>=number*60){
    return "B";
  }
  else if (sum>=number*40){
    return "C";
  }
  else {
    return "D";
  }
}
function get_pass_or_failure(points){
  let judge = "pass";
  for(let i=0; i<number; i++){
    if(points[i]<60){
      judge= "echec";
      break;
    }
  }
  return judge;
}
function judgement(points){
  let achievement = get_achievement(points);
  let pass_or_failure =  get_pass_or_failure(points);
  return votre note est ${achievement} la decision est ${pass_or_failure}";
}
let points= [100,80, 50, 70, 80];
let number = points.length;
console.log(judgement(points));
