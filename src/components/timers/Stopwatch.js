import React from "react";
import Button from "../generic/Button/Button"
import FlexColumn from "../generic/FlexDivs/FlexColumn";
import FlexRow from "../generic/FlexDivs/FlexRow";

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      milleseconds: 0,
      seconds: 0,
      minutes: 0,
      hours: 0,
      days: 0,
      currentTime: 0,
      timerID: 0
    };
  }

  render() {

    const incrementMilleseconds = () => {
      console.log("incrementing seconds: " +  this.state.seconds);
      if (this.state.seconds < 1000) {
        this.setState({ seconds: this.state.seconds + 1 })
      }
    }
    const incrementSeconds = () => {
      console.log("incrementing seconds: " +  this.state.seconds);
      if (this.state.seconds < 60) {
        this.setState({ seconds: this.state.seconds + 1 })
      }
    }
    const incrementMinutes = () => {
      console.log("incrementing minutes " +  this.state.minutes);
      if (this.state.minutes < 60) {
        this.setState({ minutes: this.state.minutes + 1 })
      }
    }
    const incrementHours = () => {
      console.log("incrementing hours " +  this.state.hours);
      if (this.state.hours < 24) {
        this.setState({ hours: this.state.hours + 1 })
      }
    }
    const incrementDays = () => {
      console.log("incrementing days " +  this.state.days);
      if (this.state.days < 360) {
        this.setState({ days: this.state.days + 1 })
      }
    }

    // Convert seconds into days, hours, minutes, and seconds for the countdown presentation

    const convertSecondsToTimer = (ConvertedSeconds) => {
      this.setState({ days: Math.floor(ConvertedSeconds / 86400)});
      const daysRemainder = ConvertedSeconds % 86400;
      this.setState({ hours: Math.floor(daysRemainder / 3600)});
      const hoursRemainder = daysRemainder % 3600;
      this.setState({ minutes: Math.floor(hoursRemainder / 60)});
      const minutesRemainder = hoursRemainder % 60;
      this.setState({ seconds: Math.floor(minutesRemainder / 1)});
      const secondsRemainder = minutesRemainder % 1;
      this.setState({ milleseconds: Math.floor(secondsRemainder / .01)});
    }


    // get the currentSeconds and add 1ms
    // Create a asynchronous setinterval that runs every second
    // decrease the totalSeconds by one every interval
    // convert the totalSeconds back to the normal time
    const start = () => {
      this.state.timerID = setInterval(() => {
          this.state.currentTime = this.state.currentTime + .01;
          convertSecondsToTimer(this.state.currentTime);
          console.log("minutes: " + this.state.minutes + "seconds: " + this.state.seconds)        
      }, 10)
    }

    const stop = () => {
      clearInterval(this.state.timerID);
    }

    const restart = () => {
      clearInterval(this.state.timerID);
      convertSecondsToTimer(this.state.initialTime)
    }

    const clear = () => {
      clearInterval(this.state.timerID);
      convertSecondsToTimer(0);
      this.setState({currentTime: 0});
    }

    this.componentWillUnmount = () => {
      clearInterval(this.state.timerID);
    }

    this.componentDidMount = () => {
      clearInterval(this.state.timerID);
    }

    return (
      <>
        <FlexColumn color="grey">
          <FlexRow centered="true">
            <p>Stopwatch</p>
          </FlexRow>
          <FlexRow width="auto" height="auto" centered="true">
            <Button disabled="true" width="50px" height="50px">{ this.state.days}d</Button>
            <Button disabled="true" width="50px" height="50px">{ this.state.hours}h</Button>
            <Button disabled="true" width="50px" height="50px">{ this.state.minutes}m</Button>
            <Button disabled="true" width="50px" height="50px">{ this.state.seconds}s</Button>
            <Button disabled="true" width="50px" height="50px">{ this.state.milleseconds}ms</Button>
          </FlexRow>
          <FlexRow spaceEvenly="true" centered="true">
            <Button onClick={start} color="green" width="50%" height="50px">start</Button>
            <Button onClick={stop} color="grey" width="50%" height="50px">pause</Button>
          </FlexRow>
          <FlexRow spaceEvenly="true" centered="true">
          <Button onClick={clear} color="red" width="100%" height="50px">Clear</Button>
          </FlexRow>
        </FlexColumn>
      </>
    );
  }
}

export default Stopwatch;
