import React from "react";

import "./styles/BadgeNew.css";
import header from "../images/platziconf-logo.svg";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";
import PageLoading from "../components/PageLoading";

import api from "../api";

class BadgeNew extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      error: null,
      form: {
        firstName: "",
        lastName: "",
        jobTitle: "",
        email: "",
        twitter: "",
      },
    };
  }

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({
      loading: true,
      error: null,
    });

    try {
      await api.badges.create(this.state.form);
      this.setState({
        loading: false,
      });

      this.props.history.push("/badges");
    } catch (error) {
      this.setState({
        loading: false,
        error: error,
      });
    }
  };

  render() {
    if (this.state.loading) {
      return <PageLoading />;
    }

    return (
      <>
        <div className="BadgeNew__hero">
          <img
            className="img-fluid BadgeNew__hero-image"
            src={header}
            alt="Logo"
          />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={this.state.form.firstName || "FIRST NAME"}
                lastName={this.state.form.lastName || "LAST NAME"}
                jobTItle={this.state.form.jobTitle || "JOB TITLE"}
                twitter={this.state.form.twitter || "twitter"}
                email={this.state.form.email || "EMAIL"}
                avatar="https://s.gravatar.com/avatar/11da7bec247f8bd5c9dbe3cd000c48ce?s=80"
              />
            </div>
            <div className="col-6">
              <h1>New Attendant</h1>
              <BadgeForm
                onChange={this.handleChange}
                formValues={this.state.form}
                onSubmit={this.handleSubmit}
                error={this.state.error}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default BadgeNew;
