import { contactTypes } from "@/types/commonTypes";

export default function DisplayContact(props: { contactData: contactTypes[] }) {
  return (
    <div>
      <div>
        <table>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Subject</th>
            <th>Country</th>
            <th>Address</th>
            <th>Father's Name</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Message</th>
          </tr>
          {props.contactData.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.subject}</td>
                <td>{item.country}</td>
                <td>{item.address}</td>
                <td>{item.fatherName}</td>
                <td>{item.gender}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{item.message}</td>
              </tr>
            )
          })}
        </table>
      </div>
    </div>
  )
}
