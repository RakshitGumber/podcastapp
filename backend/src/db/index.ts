import { connect } from "mongoose";

const connection = async () => {
  connect(
    process.env.ATLAS_URI ??
      `mongodb+srv://${process.env.ATLAS_USERNAME}:${process.env.ATLAS_PASSWORD}@testcluster.d7c1ke1.mongodb.net/?retryWrites=true&w=majority&appName=TestCluster`
  );
};

export default connection;
