import React from "react";
import Button from "../generic/Button/Button"
import FlexColumn from "../generic/FlexDivs/FlexColumn";
import FlexRow from "../generic/FlexDivs/FlexRow";

class XY extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0,
      minutes: 0,
      hours: 0,
      days: 0,
      initialTime: 0,
      timerID: 0,
      round: 1
    };
  }

  render() {


    const incrementSeconds = () => {
      console.log("incrementing seconds: " + this.state.seconds);
      if (this.state.seconds < 60) {
        this.setState({ seconds: this.state.seconds + 1 })
      }
    }
    const decreaseSeconds = () => {
      if (this.state.seconds > 0) {
        this.setState({ seconds: this.state.seconds - 1 })
      }
    }
    const incrementMinutes = () => {
      console.log("incrementing minutes " + this.state.minutes);
      if (this.state.minutes < 60) {
        this.setState({ minutes: this.state.minutes + 1 })
      }
    }
    const decreaseMinutes = () => {
      if (this.state.minutes > 0) {
        this.setState({ minutes: this.state.minutes - 1 })
      }
    }
    const incrementHours = () => {
      console.log("incrementing hours " + this.state.hours);
      if (this.state.hours < 24) {
        this.setState({ hours: this.state.hours + 1 })
      }
    }
    const decreaseHours = () => {
      if (this.state.hours > 0) {
        this.setState({ hours: this.state.hours - 1 })
      }
    }
    const incrementDays = () => {
      console.log("incrementing days " + this.state.days);
      if (this.state.days < 360) {
        this.setState({ days: this.state.days + 1 })
      }
    }
    const decreaseDays = () => {
      if (this.state.days > 0) {
        this.setState({ days: this.state.days - 1 })
      }
    }
    const incrementRounds = () => {
      if (this.state.round < 100) {
        this.setState({ round: this.state.round + 1 })
      }
    }

    const decreaseRounds = () => {
      if (this.state.round > 1) {
        this.setState({ round: this.state.round - 1 })
      }
    }

    // Convert all of the days, hours, minutes, and seconds into seconds so we can more easily process the data

    const convertTimerToSeconds = () => {
      const totalSeconds = (this.state.days * 86400) + (this.state.hours * 3600) + (this.state.minutes * 60) + this.state.seconds;
      return totalSeconds;
    }

    // Convert seconds into days, hours, minutes, and seconds for the countdown presentation

    const convertSecondsToTimer = (ConvertedSeconds) => {
      this.setState({ days: Math.floor(ConvertedSeconds / 86400) });
      const daysRemainder = ConvertedSeconds % 86400;
      this.setState({ hours: Math.floor(daysRemainder / 3600) });
      const hoursRemainder = daysRemainder % 3600;
      this.setState({ minutes: Math.floor(hoursRemainder / 60) });
      this.setState({ seconds: hoursRemainder % 60 });
    }

    // Buttons Start
    //

    const start = () => {
      const initialSeconds = convertTimerToSeconds();
      this.state.initialTime = initialSeconds;
      this.state.timerID = setInterval(() => {
        let totalSeconds = convertTimerToSeconds();
        console.log("total seconds are" + totalSeconds);
        if (totalSeconds > 0) {
          totalSeconds = totalSeconds - 1;
          convertSecondsToTimer(totalSeconds);
          console.log("minutes: " + this.state.minutes + "seconds: " + this.state.seconds)
          // somehow we trigger a rerender here?
        }
        else {
          if (this.state.round > 1) {
            convertSecondsToTimer(this.state.initialTime);
            this.setState({ round: this.state.round - 1 })
          }
          else {
            stop();
          }
        }
      }, 1000)
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
    }

    // Turn off setInterval when reloading

    this.componentWillUnmount = () => {
      clearInterval(this.state.timerID);
    }

    this.componentDidMount = () => {
      clearInterval(this.state.timerID);
    }

    // Add leading zeros
    // src: https://www.codegrepper.com/code-examples/javascript/react+js+add+leading+zeros

    function padLeadingZeros(num, size) {
      var s = num + "";
      while (s.length < size) s = "0" + s;
      return s;
    }
    // examples:
    // padLeadingZeros(57, 3);// "057"
    // padLeadingZeros(57, 4); //"0057"

    return (
      <>
        <FlexRow color="grey">
          <FlexColumn height="100%" centered="true" color="grey">
            <FlexRow >
              <p>Round</p>
            </FlexRow>
            <Button onClick={incrementRounds} centered="true" width="25px" height="25px">^</Button>
            <Button disabled="true" centered="true" width="50px" height="50px">{this.state.round}</Button>
            <Button onClick={decreaseRounds} centered="true" width="25px" height="25px">v</Button>
          </FlexColumn>
          <FlexColumn>
            <FlexRow centered="true">
              <p>XY</p>
            </FlexRow>
            <FlexRow spaceEvenly="true" centered="true">
              <Button onClick={incrementDays} width="25px" height="25px">^</Button>
              <Button onClick={incrementHours} width="25px" height="25px">^</Button>
              <Button onClick={incrementMinutes} width="25px" height="25px">^</Button>
              <Button onClick={incrementSeconds} width="25px" height="25px">^</Button>
            </FlexRow>
            <FlexRow width="auto" height="auto" centered="true">
              <Button disabled="true" width="50px" height="50px">{this.state.days}d</Button>
              <Button disabled="true" width="50px" height="50px">{padLeadingZeros(this.state.hours, 2)}h</Button>
              <Button disabled="true" width="50px" height="50px">{padLeadingZeros(this.state.minutes, 2)}m</Button>
              <Button disabled="true" width="50px" height="50px">{padLeadingZeros(this.state.seconds, 2)}s</Button>
            </FlexRow>
            <FlexRow spaceEvenly="true" centered="true">
              <Button onClick={decreaseDays} width="25px" height="25px">v</Button>
              <Button onClick={decreaseHours} width="25px" height="25px">v</Button>
              <Button onClick={decreaseMinutes} width="25px" height="25px">v</Button>
              <Button onClick={decreaseSeconds} width="25px" height="25px">v</Button>
            </FlexRow>
            <FlexRow spaceEvenly="true" centered="true">
              <Button onClick={start} color="green" width="30%" height="50px">start</Button>
              <Button onClick={stop} color="grey" width="30%" height="50px">pause</Button>
              <Button onClick={restart} color="yellow" width="20%" height="50px">&#8634;</Button>
            </FlexRow>
            <FlexRow spaceEvenly="true" centered="true">
              <Button onClick={clear} color="red" width="100%" height="50px">Clear</Button>
            </FlexRow>
          </FlexColumn>
        </FlexRow>
      </>
    );
  }
}

export default XY;
