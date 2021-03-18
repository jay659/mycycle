import React from "react";

export default function BookDetails() {
  return (
    <>
      <div className="container-fliud pt-50">
        <div className="row">
          <div className="col-12">
            <table className="table-fill" width="100%">
              <thead>
                <tr>
                  <th className="item-image">Item</th>
                  <th className="text-left">Name</th>
                  {/* <th className="text-left">Number</th> */}
                  <th className="text-left">Booking ID</th>
                  <th className="text-left">pickup time</th>
                  <th className="text-left">pickup Location</th>
                </tr>
              </thead>
              <tbody className="table-hover">
                <tr>
                  <td>
                    <img
                      src="https://content.jdmagicbox.com/comp/ahmedabad/m4/079pxx79.xx79.161117204233.n9m4/catalogue/mybyk-terminal-shivranjani-brts-ahmedabad-bicycle-on-hire-r1zqlw2k2r.jpg"
                      alt="detail-cycle-view"
                      width="100"
                    />
                  </td>
                  <td className="text-left">jay</td>
                  {/* <td className="text-left">5000000</td> */}
                  <td className="text-left">50000hdfkjfh00</td>
                  <td className="text-left">12 AM</td>
                  <td className="text-left"> Ghodasar</td>
                </tr>
                <tr>
                  <td>
                    <img
                      src="https://content.jdmagicbox.com/comp/ahmedabad/m4/079pxx79.xx79.161117204233.n9m4/catalogue/mybyk-terminal-shivranjani-brts-ahmedabad-bicycle-on-hire-r1zqlw2k2r.jpg"
                      alt="detail-cycle-view"
                      width="100"
                    />
                  </td>
                  <td className="text-left">kisan</td>
                  {/* <td className="text-left">1000000</td> */}
                  <td className="text-left">1fsdiufgiukn000000</td>
                  <td className="text-left">11 PM</td>
                  <td className="text-left"> nikol</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
