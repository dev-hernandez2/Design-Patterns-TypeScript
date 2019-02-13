// Design Patterns | Observer Pattern
export namespace ObserverMethodPattern {
  // This interface is implemented by all those
  // classes that are to be updated whenever there
  // is an update from CricketData
  interface Observer {
    update(runs: number, wickets: number, overs: number);
  }
  // Implemented by Cricket data to communicate
  // with observers
  interface Subject {
    registerObserver(o: Observer): void;
    unregisterObserver(o: Observer): void;
    notifyObservers(): void;
  }
  class CricketData implements Subject {
    runs: number;
    wickets: number;
    overs: number;
    observerList: Array<Observer>;

    public CricketData(): void {
      this.observerList = new Array<Observer>();
    }

    public registerObserver(o: Observer): void {
      console.log(o);
    }

    public unregisterObserver(o: Observer): void {}

    public notifyObservers(): void {}

    // get latest runs from stadium
    private getLatestRuns(): number {
      // return 90 for simplicity
      return 90;
    }

    // get latest wickets from stadium
    private getLatestWickets(): number {
      // return 2 for simplicity
      return 2;
    }

    // get latest overs from stadium
    private getLatestOvers(): number {
      // return 90 for simplicity
      return 10.2;
    }

    // This method is used update displays
    // when data changes
    public dataChanged(): void {
      //get latest data
      this.runs = this.getLatestRuns();
      this.wickets = this.getLatestWickets();
      this.overs = this.getLatestOvers();
    }
  }

  class AverageScoreDisplay implements Observer {
    private runRate: number;
    private predictedScore: number;

    public update(runs: number, wickets: number, overs: number): void {
      this.runRate = runs / overs;
      this.predictedScore = this.runRate * 50;
      this.display();
    }

    public display(): void {
      console.log(`\nAverage Score Display: \n
        Run Rate: ${this.runRate} \n 
        PredictedScore: ${this.predictedScore}`);
    }
  }

  class CurrentScoreDisplay implements Observer {
    private runs: number;
    private wickets: number;
    private overs: number;

    public update(runs: number, wickets: number, overs: number): void {
      this.runs = runs;
      this.wickets = wickets;
      this.overs = overs;
      this.display();
    }

    public display(): void {
      console.log(`\nCurrent Score Display:\n
        Runs: ${this.runs} 
        Wickets: ${this.wickets} 
        Overs: ${this.overs}`);
    }
  }

  export function main() {
    // create objects for testing
    const averageScoreDisplay = new AverageScoreDisplay();
    const currentScoreDisplay = new CurrentScoreDisplay();

    // pass the displays to Cricket data
    const cricketData = new CricketData();

    // register display elements
    cricketData.registerObserver(averageScoreDisplay);
    cricketData.registerObserver(currentScoreDisplay);

    // in real app you would have some logic to
    // call this function when data changes
    cricketData.dataChanged();

    //remove an observer
    cricketData.unregisterObserver(averageScoreDisplay);

    // now only currentScoreDisplay gets the
    // notification
    cricketData.dataChanged();
  }
}