import React from "react";

const DataValidation = () => {
  return (
    <div className="tab-pane" id="tab-2" role="tabpanel" aria-labelledby="tab2">
      <div className="row">
        <div className="col-md-3">
          <div className="form-group">
            <label for="inputState">Brand</label>
            <select id="inputState" className="form-control">
              <option selected="">Select...</option>
              <option>...</option>
            </select>
          </div>
        </div>
        <div className="col-md-3">
          <div className="form-group">
            <label for="inputState">Validation Metric</label>
            <select id="inputState" className="form-control">
              <option selected="">Select...</option>
              <option>...</option>
            </select>
          </div>
        </div>
        <div className="col-md-3">
          <div className="form-group">
            <label for="inputState">Media</label>
            <select id="inputState" className="form-control">
              <option selected="">Select...</option>
              <option>...</option>
            </select>
          </div>
        </div>
        <div className="col-md-3">
          <div className="form-group">
            <label for="inputState">Measure</label>
            <div className="row">
              <div className="col-sm-12 m-t-10">
                <div className="radio form-check form-check-inline">
                  <input
                    type="radio"
                    name="gridRadios"
                    id="gridRadios1"
                    value="option1"
                    checked
                  />
                  <label for="gridRadios1">Impressions</label>
                </div>
                <div className="radio form-check form-check-inline">
                  <input
                    type="radio"
                    name="gridRadios"
                    id="gridRadios2"
                    value="option2"
                  />
                  <label for="gridRadios2">Spend</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h2 className="m-b-0">Chart</h2>
                  <p className="m-b-0 text-muted">Avg.Profit</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataValidation;
