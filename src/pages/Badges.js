import React from "react";

import "./styles/Badges.css";
import confLogo from "../images/badge-header.svg";
import BadgesList from "../components/BadgesList";
import PageLoading from "../components/PageLoading";
import PageError from "../components/PageError";
import MiniLoader from "../components/MiniLoader";
import { Link } from "react-router-dom";

import api from "../api";

class Badges extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      loading: true,
      error: null,
    };
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });

    try {
      const data = await api.badges.list();

      this.setState({
        loading: false,
        data: data,
      });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  componentDidMount() {
    this.fetchData();

    this.intervalId = setInterval(this.fetchData, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    if (this.state.loading && !this.state.data) {
      return <PageLoading />;
    }

    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }

    return (
      <>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img className="Badges_conf-logo" src={confLogo} alt="logo" />
            </div>
          </div>

          <div className="Badges__container">
            <div className="Badges__buttons">
              <Link to="/badges/new" className="btn btn-primary">
                New Badge
              </Link>
            </div>

            <div className="Badges__list">
              <div className="Badges___container">
                <BadgesList badges={this.state.data} />
              </div>
              <div className="d-flex my-2 justify-content-center">
                {this.state.loading && <MiniLoader />}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Badges;
