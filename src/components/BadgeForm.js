import React from "react";

class BadgeForm extends React.Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              className="form-control"
              onChange={this.props.onChange}
              value={this.props.formValues.firstName}
            />
          </div>

          <div className="form-group">
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              className="form-control"
              onChange={this.props.onChange}
              value={this.props.formValues.lastName}
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              onChange={this.props.onChange}
              value={this.props.formValues.email}
            />
          </div>

          <div className="form-group">
            <label>Job Title</label>
            <input
              type="text"
              name="jobTitle"
              className="form-control"
              onChange={this.props.onChange}
              value={this.props.formValues.jobTitle}
            />
          </div>

          <div className="form-group">
            <label>Twitter</label>
            <input
              type="text"
              name="twitter"
              className="form-control"
              onChange={this.props.onChange}
              value={this.props.formValues.twitter}
            />
          </div>

          <button className="btn btn-primary">Save</button>

          {this.props.error && (
            <p className="text-danger mt-2">{this.props.error.message}</p>
          )}
        </form>
      </div>
    );
  }
}

export default BadgeForm;
