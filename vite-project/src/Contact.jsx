export default function Contact() {
    return (
        <div className="container py-4">
            <h2 className="mb-3">Contact</h2>
            <form style={{ maxWidth: '480px' }}>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Message</label>
                    <textarea className="form-control" rows="4"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Send</button>
            </form>
        </div>
    );
}
