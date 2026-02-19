import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, phone, message } = body

    if (!name || !phone) {
      return NextResponse.json(
        { error: "İsim ve telefon gereklidir" },
        { status: 400 }
      )
    }

    if (!/^\d{11}$/.test(phone)) {
      return NextResponse.json(
        { error: "Telefon numarası 11 haneli ve yalnızca rakamlardan oluşmalıdır" },
        { status: 400 }
      )
    }

    const smtpHost = process.env.SMTP_HOST
    const smtpPort = process.env.SMTP_PORT
    const smtpUser = process.env.SMTP_USER
    const smtpPass = process.env.SMTP_PASS
    const mailTo = process.env.MAIL_TO

    if (!smtpHost || !smtpPort || !smtpUser || !smtpPass || !mailTo) {
      console.error("[v0] Missing SMTP environment variables")
      return NextResponse.json(
        { error: "Sunucu e-posta ayarları eksik. Lütfen daha sonra tekrar deneyin." },
        { status: 500 }
      )
    }

    const parsedPort = Number(smtpPort)

    if (!Number.isInteger(parsedPort) || parsedPort <= 0) {
      console.error("[v0] Invalid SMTP_PORT value")
      return NextResponse.json(
        { error: "Sunucu e-posta ayarları geçersiz. Lütfen daha sonra tekrar deneyin." },
        { status: 500 }
      )
    }

    // Create transporter with SMTP settings
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: parsedPort,
      secure: parsedPort === 465, // true for 465, false for other ports
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    })

    // Email content
    const mailOptions = {
      from: `"Trakyadent Website" <${smtpUser}>`,
      to: mailTo,
      subject: `Yeni İletişim Formu - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f5f5f5;">
          <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #0c7abf; margin-bottom: 20px;">Yeni İletişim Formu Talebi</h2>
            
            <div style="background-color: #f9f9f9; padding: 20px; border-radius: 5px; margin-bottom: 15px;">
              <p style="margin: 0 0 10px 0; color: #333;">
                <strong style="color: #0c7abf;">Ad Soyad:</strong> ${name}
              </p>
              <p style="margin: 0 0 10px 0; color: #333;">
                <strong style="color: #0c7abf;">Telefon:</strong> ${phone}
              </p>
              ${message ? `
                <p style="margin: 10px 0 0 0; color: #333;">
                  <strong style="color: #0c7abf;">Mesaj:</strong><br/>
                  ${message}
                </p>
              ` : ''}
            </div>
            
            <p style="font-size: 12px; color: #999; margin-top: 20px; border-top: 1px solid #eee; padding-top: 15px;">
              Bu e-posta Trakyadent Kids web sitesinden gönderilmiştir.
            </p>
          </div>
        </div>
      `,
      text: `
        Yeni İletişim Formu Talebi
        
        Ad Soyad: ${name}
        Telefon: ${phone}
        ${message ? `\nMesaj: ${message}` : ''}
        
        Bu e-posta Trakyadent Kids web sitesinden gönderilmiştir.
      `,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { success: true, message: "Mesajınız başarıyla gönderildi!" },
      { status: 200 }
    )
  } catch (error) {
    console.error("[v0] Contact form error:", error)
    return NextResponse.json(
      { error: "Mesaj gönderilemedi. Lütfen tekrar deneyin." },
      { status: 500 }
    )
  }
}
