import React from "react";

import "./styles/BadgeDetails.css";
import PageLoading from "../components/PageLoading";
import PageError from "../components/PageError";
import api from "../api";
import BadgeDetails from "./BadgeDetails";

export default class BadgeDetailsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      error: null,
      data: undefined,
      modalIsOpen: false,
    };
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });

    try {
      const data = await api.badges.read(this.props.match.params.badgeId);

      this.setState({ loading: false, data: data });
    } catch (err) {
      this.setState({ loading: false, error: err });
    }
  };

  componentDidMount() {
    this.fetchData();
  }

  handleCloseModal = () => {
    this.setState({ modalIsOpen: false });
  };

  handleOpenModal = () => {
    this.setState({ modalIsOpen: true });
  };

  handleDeleteBadge = async () => {
    this.setState({ loading: true, error: false });

    try {
      await api.badges.remove(this.props.match.params.badgeId);

      this.props.history.push("/badges");
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.loading) {
      return <PageLoading />;
    }

    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }

    return (
      <BadgeDetails
        badge={this.state.data}
        onCloseModal={this.handleCloseModal}
        onOpenModal={this.handleOpenModal}
        modalIsOpen={this.state.modalIsOpen}
        onDeleteBadge={this.handleDeleteBadge}
      />
    );
  }
}
