    <?php
    $sname = "localhost";
    $suname = "root";
    $password = "";
    $db_name = "hackathon";

    $conn = mysqli_connect($sname, $suname, $password, $db_name);
    if (!$conn) {
        echo "Connection failed!";
        exit();
    }

    if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["submit"])) {
        $uname = $_POST["username"];
        $pass = $_POST["password"];

        $sql = "SELECT * FROM `root` WHERE `username`='$uname' AND `password`='$pass'";
        $result = mysqli_query($conn, $sql);

        if (mysqli_num_rows($result) == 1) {
            header("Location: afterlogin.html");
            exit();
        } else {
            header("Location: error-page?error=wrongcredentials");
            exit();
        }
    }

    mysqli_close($conn);
?>