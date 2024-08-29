import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-6">
                    <script>document.write(new Date().getFullYear())</script> © Dase.
                </div>
                <div className="col-sm-6">
                    <div className="text-sm-end d-none d-sm-block">
                        Design & Develop by S.T.A
                    </div>
                </div>
            </div>
        </div>
      </footer>
    </>
  );
}
