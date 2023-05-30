export default function checkLogin(req,res) {
    if (req.isAuthenticated()) {
        return res.json(true)
    } else {
        return res.json(false)
    }
}