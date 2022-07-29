<?
require_once 'PHPMailer/PHPMailerAutoload.php';




$admin_email = 'EMAIL'
$form_subject = trim($_POST["form_subject"]);

$mail = new PHPMailer;
$mail->CharSet = 'UTF-8';



$c = true;
$message = '';
foreach ( $_POST as $key => $value ) {
	if ( $value != "" && $key != "form_subject" ) {
		if (is_array($value)) {
			$val_text = '';
			foreach ($value as $val) {
				if ($val && $val != '') {
					$val_text .= ($val_text==''?'':', ').$val;
				}
			}
			$value = $val_text;
		}
		$message .= "
		" . ( ($c = !$c) ? '<tr>':'<tr>' ) . "
		<td style='padding: 10px; width: auto;'><b>$key:</b></td>
		<td style='padding: 10px;width: 100%;'>$value</td>
		</tr>
		";
	}
}
$message = "<table style='width: 50%;'>$message</table>";


// От кого
$mail->setFrom('admin@' . $_SERVER['HTTP_HOST'], 'Blanchard feedback');
 
// Кому
foreach ( $admin_email as $key => $value ) {
	$mail->addAddress($value);
}
// Тема письма
$mail->Subject = $form_subject;
 
// Тело письма
$body = $message;

$mail->msgHTML($body);

$mail->send();
?>