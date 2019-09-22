import React, {Component} from 'react';

class Login extends Component {  
    render (){
        return (
        <div style={{padding: "0 6rem"}}> 
        <center><h5>Welcome to the New York City Housing Authority </h5> </center>
   
         <br></br>
         <table className="striped"> 
             
        <thead>
          <tr>
              <th>Requirements</th>
              <th>Files </th>
              <th>Verification</th>    
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Social Security Documentation</td>
            <td>  <a class="waves-effect waves-light btn">Upload</a></td>
            <td> <label><input type="checkbox" /><span>Social Security System</span></label></td>
          </tr>
          <tr>
            <td>Information on Public Assistance (Food Stamps)</td>
            <td> <a class="waves-effect waves-light btn">Upload</a></td>
            <td>  <label><input type="checkbox" /> <span>Human Resources Administration</span></label></td>
          </tr>
          <tr>
            <td>Health Records</td>
            <td><a class="waves-effect waves-light btn">Upload</a></td>
            <td>  <label><input type="checkbox" /><span>NYC Health and Hospitals</span></label></td>
          </tr>
          <tr>
            <td>Certification of Child Services</td>
            <td><a class="waves-effect waves-light btn">Upload</a></td>
            <td>  <label><input type="checkbox" /><span>Administration of Child Services</span></label></td>
          </tr>

          <tr>
            <td>Marriage Certificate</td>
            <td><a class="waves-effect waves-light btn">Upload</a></td>
            <td>  <label><input type="checkbox" /><span>City Clerk</span></label></td>
          </tr>  
          <tr>
            <td>Birth Certificate</td>
            <td><a class="waves-effect waves-light btn">Upload</a></td>
            <td>  <label><input type="checkbox" /><span>Department of Health</span></label></td>
          </tr>
          <tr>
            <td>Immigration Status</td>
            <td><a class="waves-effect waves-light btn">Upload</a></td>
            <td>  <label><input type="checkbox" /><span>USCIS</span></label></td>
          </tr>

          <tr>
            <td>Proof of Address</td>
            <td><a class="waves-effect waves-light btn">Upload</a></td>
            <td>  <label><input type="checkbox" /><span>Utility Bills</span></label></td>
          </tr>
          <tr>
            <td>Proof of Residency</td>
            <td><a class="waves-effect waves-light btn">Upload</a></td>
            <td>  <label><input type="checkbox" /><span>Landlord Certification</span></label></td>
          </tr>
          <tr>
            <td>Proof of Income</td>
            <td><a class="waves-effect waves-light btn">Upload</a></td>
            <td>  <label><input type="checkbox" /><span>Internal Revenue</span></label></td>
          </tr>
          <tr>
            <td>Interview with NYCHA</td>
            <td><a class="waves-effect waves-light btn">Upload</a></td>
            <td>  <label><input type="checkbox" /><span>NYCHA</span></label></td>
          </tr>
        </tbody>
      </table>
       <br></br>     
       <br></br>  
       <center> 
       <button class="btn waves-effect waves-light" type="submit" name="action">Submit
       </button> &nbsp &nbsp
       <button class="btn waves-effect waves-light" type="submit" name="action">Processing
       </button> &nbsp &nbsp
       <button class="btn waves-effect waves-light" type="submit" name="action">Approval
       </button> &nbsp &nbsp
       <button class="btn waves-effect waves-light" type="submit" name="action">Allocation
       </button> &nbsp &nbsp    
       <button class="btn waves-effect waves-light" type="submit" name="action">Moving
       </button>
       </center> 
       <br></br>
       <br></br>     
 
         
       </div>        
          
        )
    }
}

export default Login;