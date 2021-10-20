import React from "react";
import Button from "../generic/Button/Button"
import FlexColumn from "../generic/FlexDivs/FlexColumn";
import FlexRow from "../generic/FlexDivs/FlexRow";

class Tabata extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentState: "work",
      work: 0,
      rest: 0,
      initialWork: 0,
      initialRest: 0,
      timerID: 0,
      round: 1
    };
  }

  render() {


    const incrementWork = () => {
      if (this.state.work < 60) {
        this.setState({ work: this.state.work + 1 })
      }
    }
    const decreaseWork = () => {
      if (this.state.work > 0) {
        this.setState({ work: this.state.work - 1 })
      }
    }
    const incrementRest = () => {
      console.log("incrementing minutes " + this.state.rest);
      if (this.state.rest < 60) {
        this.setState({ rest: this.state.rest + 1 })
      }
    }
    const decreaseRest = () => {
      if (this.state.rest > 0) {
        this.setState({ rest: this.state.rest - 1 })
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

      this.state.initialWork = this.state.work;
      this.state.initialRest = this.state.rest;

      this.state.timerID = setInterval(() => {
        if (this.state.work > 0) {
          this.setState({ work: this.state.work - 1 })
        }
        else {
          if (this.state.rest > 0) {
            this.setState({ rest: this.state.rest - 1 })

          }
          else {
            if (this.state.round > 1) {
              this.setState({ round: this.state.round - 1 });
              this.setState({ work: this.state.initialWork });
              this.setState({ rest: this.state.initialRest });
            }
            else {
              stop();
            }
          }
        }
      }, 1000)
    }

    const stop = () => {
      clearInterval(this.state.timerID);
    }

    const restart = () => {
      clearInterval(this.state.timerID);
      this.setState({ work: this.state.initialWork });
      this.setState({ rest: this.state.initialRest });
    }

    const clear = () => {
      clearInterval(this.state.timerID);
      this.setState({ work: 0 });
      this.setState({ rest: 0 });
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
          <FlexColumn centered="true" color="grey">
            <FlexRow >
              <p>Round</p>
            </FlexRow>
            <Button onClick={incrementRounds} centered="true" width="25px" height="25px">^</Button>
            <Button disabled="true" centered="true" width="50px" height="50px">{this.state.round}</Button>
            <Button onClick={decreaseRounds} centered="true" width="25px" height="25px">v</Button>
          </FlexColumn>
          <FlexColumn spaceEvenly="true" width="300px">
            <FlexRow>
              <FlexColumn width="50%" centered="true">
                <FlexRow >
                  <p>Work Time</p>
                </FlexRow>
                <Button onClick={incrementWork} centered="true" width="25px" height="25px">^</Button>
                <Button disabled="true" centered="true" width="50px" height="50px">{this.state.work}s</Button>
                <Button onClick={decreaseWork} centered="true" width="25px" height="25px">v</Button>
              </FlexColumn>
              <FlexColumn width="50%"  centered="true">
                <FlexRow >
                  <p>Rest Time</p>
                </FlexRow>
                <Button onClick={incrementRest} centered="true" width="25px" height="25px">^</Button>
                <Button disabled="true" centered="true" width="50px" height="50px">{this.state.rest}s</Button>
                <Button onClick={decreaseRest} centered="true" width="25px" height="25px">v</Button>
              </FlexColumn>
              <FlexRow width="100%" centered="true" spaceEvenly="true" centered="true">
                <Button onClick={start} color="green" width="30%" height="50px">start</Button>
                <Button onClick={stop} color="grey" width="30%" height="50px">pause</Button>
                <Button onClick={restart} color="yellow" width="20%" height="50px">&#8634;</Button>
              </FlexRow>
              <FlexRow width="100%" spaceEvenly="true" centered="true">
                <Button onClick={clear} color="red" width="100%" height="50px">Clear</Button>
              </FlexRow>
            </FlexRow>
          </FlexColumn>

        </FlexRow>
      </>
    );
  }
}

export default Tabata;
