import React, { Component } from "react";
import DefaultLayout from "../../../components/layouts/default";

class Profile extends DefaultLayout {
  renderContent(): JSX.Element {
    return <div>Profile---</div>;
  }
  renderSide(): JSX.Element {
    return null;
  }
}

export default Profile;
