import { Goal } from "../models/goal";
import { Storage } from '@ionic/storage';
import { Injectable } from "@angular/core";
//import { File } from "ionic-native";

//declare var cordova: any;

@Injectable()
export class ActionPlannerService {
    private goals: Goal[] = [];
    constructor(private storage: Storage) {}

    addItem(goal: string, barriers: string, strategies: string ){
        this.goals.push(new Goal(goal, barriers, strategies));
        console.log(this.goals);
    }
    addItems(items: Goal[]){
        this.goals.push(...items);
    }
    getItems(){
        return this.goals.slice();
    }
    removeItem(index: number){
        this.goals.splice(index, 1);
    }


    addGoal(goalName: string, barriers: string, strategies: string) {
    const goal = new Goal(goalName, barriers, strategies);
    this.goals.push(goal);
    this.storage.set('goals', this.goals)
    .then()
    .catch(
      err => {
        this.goals.splice(this.goals.indexOf(goal), 1);
      }
    );
}
loadGoals(){
    return this.goals.slice();
}
fetchGoals() {
    return this.storage.get('goals')
      .then(
        (goals: Goal[]) => {
          this.goals = goals != null ? goals : [];
          return this.goals;
        }
      )
      .catch(
        err => console.log(err)
      );
  }

  deleteGoal(index: number) {
    this.goals.splice(index, 1);
    this.storage.set('goals', this.goals)
     
  }
}