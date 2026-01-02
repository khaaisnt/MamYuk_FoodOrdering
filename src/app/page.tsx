import Button from "@/components/atoms/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full mx-auto">
      {/* Navbar */}
      <nav className="bg-white w-full shadow-md px-5 md:px-10 py-4">
        <div className="flex justify-between container mx-auto items-center">
          <Image
            src="/image/logo/mamyuk-logo.png"
            alt="MamYuk Logo"
            width={120}
            height={40}
            className="w-24 md:w-32 lg:w-[150px] h-auto"
          />
          <div className="flex items-center gap-4 md:gap-8">
            <Link
              href="#tentang"
              className="hidden md:inline-block text-slate-700 hover:text-mamyuk-primary font-medium"
            >
              Tentang Kami
            </Link>
            <Link
              href="#bantuan"
              className="hidden md:inline-block text-slate-700 hover:text-mamyuk-primary font-medium"
            >
              Bantuan
            </Link>
            <div className="flex gap-2 md:gap-3">
              <Link href="/auth/login">
                <Button
                  variant="outline"
                  size="sm"
                  className="font-semibold md:text-sm text-xs"
                >
                  Masuk
                </Button>
              </Link>
              <Link href="/auth/register">
                <Button
                  variant="primary"
                  size="sm"
                  className="font-semibold md:text-sm text-xs"
                >
                  Daftar
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative bg-linear-to-br from-green-50/40 to-green-100/30 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" />

        <div className="container mx-auto px-5 md:px-10 relative">
          <div className="flex flex-col md:flex-row justify-between items-center py-10 md:py-20 gap-6 md:gap-10">
            <div className="max-w-lg z-10 text-center md:text-left">
              <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-slate-900 leading-tight">
                Jajan di Kantin <br />
                Nggak Pakai{" "}
                <span className="text-mamyuk-primary">Antre Lagi!</span>
              </h1>
              <p className="py-4 md:py-6 text-slate-600 text-base md:text-lg max-w-md mx-auto md:mx-0">
                Pesan makan dan minum favoritmu di kantin sekolah dengan mudah,
                cepet, dan cashless lewat MamYuk
              </p>
              <Button
                variant="primary"
                size="md"
                className="font-bold text-sm md:text-base px-6 md:px-8"
              >
                Mulai Jajan Sekarang
              </Button>
            </div>
            <div className="relative md:-mr-32 z-0 w-full md:w-auto">
              <Image
                src={"/image/vector/canteen.png"}
                alt="Hero Canteen"
                width={750}
                height={550}
                className="object-contain w-full max-w-md md:max-w-full mx-auto"
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-12 md:h-20 bg-white rounded-t-[100%] transform translate-y-1/2" />
      </div>

      {/* User Stats Section */}
      <div className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-5 md:px-10">
          <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-2xl md:text-4xl lg:text-5xl font-bold text-mamyuk-primary mb-1 md:mb-2">
                1000+
              </div>
              <div className="text-slate-600 font-medium text-xs md:text-base">
                Pengguna Aktif
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-4xl lg:text-5xl font-bold text-mamyuk-primary mb-1 md:mb-2">
                50+
              </div>
              <div className="text-slate-600 font-medium text-xs md:text-base">
                Kantin Terdaftar
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-4xl lg:text-5xl font-bold text-mamyuk-primary mb-1 md:mb-2">
                5000+
              </div>
              <div className="text-slate-600 font-medium text-xs md:text-base">
                Transaksi Selesai
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Kenapa Harus Pakai MamYuk Section */}
      <div className="py-12 md:py-20 bg-gray-100">
        <div className="container mx-auto px-5 md:px-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-3 md:mb-4">
            Kenapa Harus Pakai{" "}
            <span className="text-mamyuk-primary">MamYuk</span>?
          </h2>
          <p className="text-center text-slate-600 text-sm md:text-base mb-8 md:mb-12 max-w-2xl mx-auto px-4">
            MamYuk hadir untuk memudahkan siswa dalam memesan makanan dan
            minuman di kantin sekolah
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-7 shadow-md hover:shadow-xl transition-shadow">
              <Image
                src={"/image/vector/rocketfire.png"}
                alt="Bebas Antre Icon"
                width={90}
                height={90}
                className="mx-auto mb-4 md:mb-6 w-16 md:w-20 lg:w-[90px] h-auto"
              />
              <h3 className="text-lg md:text-xl font-bold text-center mb-2 md:mb-3">
                Bebas <span className="text-mamyuk-primary">Antre</span>
              </h3>
              <p className="text-slate-700 text-center text-sm md:text-base">
                Pesan dari kelas, ambil pas istirahat.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-7 shadow-md hover:shadow-xl transition-shadow">
              <Image
                src={"/image/vector/Wallet.png"}
                alt="Bayar Cashless Icon"
                width={90}
                height={90}
                className="mx-auto mb-4 md:mb-6 w-16 md:w-20 lg:w-[90px] h-auto"
              />
              <h3 className="text-lg md:text-xl font-bold text-center mb-2 md:mb-3">
                Bayar <span className="text-mamyuk-primary">Cashless</span>
              </h3>
              <p className="text-slate-700 text-center text-sm md:text-base">
                Nggak ribet cari uang pas.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-md hover:shadow-xl transition-shadow">
              <Image
                src={"/image/vector/burger.png"}
                alt="Menu Lengkap Icon"
                width={90}
                height={90}
                className="mx-auto mb-4 md:mb-6 w-16 md:w-20 lg:w-[90px] h-auto"
              />
              <h3 className="text-lg md:text-xl font-bold text-center mb-2 md:mb-3">
                Menu <span className="text-mamyuk-primary">Lengkap</span>
              </h3>
              <p className="text-slate-700 text-center text-sm md:text-base">
                Semua jajanan kantin ada di sini.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Cara Mudah Jajan Section */}
      <div className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-5 md:px-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-3 md:mb-4">
            Cara Mudah <span className="text-mamyuk-primary">Jajan</span>
          </h2>
          <p className="text-center text-slate-600 text-sm md:text-base mb-8 md:mb-12 max-w-2xl mx-auto px-4">
            Hanya 3 langkah mudah untuk memesan makanan favoritmu
          </p>

          <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-12 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {/* Step 1 */}
              <div className="text-center">
                <Image
                  src={"/image/vector/mobile.png"}
                  alt="Pilih Menu di HP Icon"
                  width={150}
                  height={150}
                  className="mx-auto mb-4 md:mb-6 w-24 md:w-32 lg:w-[150px] h-auto"
                />
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">
                  1. Pilih Menu di HP
                </h3>
                <p className="text-slate-600 text-sm md:text-base">
                  Buka aplikasi dan pilih menu yang kamu mau
                </p>
              </div>

              {/* Step 2 */}
              <div className="text-center">
                <Image
                  src={"/image/vector/payment.png"}
                  alt="Bayar Online Icon"
                  width={150}
                  height={150}
                  className="mx-auto mb-4 md:mb-6 w-24 md:w-32 lg:w-[150px] h-auto"
                />
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">
                  2. Bayar Online
                </h3>
                <p className="text-slate-600 text-sm md:text-base">
                  Bayar pakai saldo digitalmu dengan aman
                </p>
              </div>

              {/* Step 3 */}
              <div className="text-center">
                <Image
                  src={"/image/vector/pickup-burger.png"}
                  alt="Ambil di Stan Icon"
                  width={150}
                  height={150}
                  className="mx-auto mb-4 md:mb-6 w-24 md:w-32 lg:w-[150px] h-auto"
                />
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">
                  3. Ambil di Stan
                </h3>
                <p className="text-slate-600 text-sm md:text-base">
                  Datang ke kantin dan ambil pesananmu yang sudah siap
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-12 md:py-20 bg-gray-800">
        <div className="container mx-auto px-5 md:px-10 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 md:mb-4">
            Siap Jajan Tanpa Antre?
          </h2>
          <p className="text-white/90 text-sm md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto px-4">
            Bergabung dengan ribuan siswa lainnya yang sudah menikmati kemudahan
            jajan di kantin
          </p>
          <Link href="/auth/register">
            <Button
              variant="secondary"
              size="md"
              className="font-bold text-sm md:text-base px-8 md:px-10"
            >
              Daftar Sekarang Gratis!
            </Button>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-mamyuk-light text-white py-8 md:py-12">
        <div className="container mx-auto px-5 md:px-10">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
            <div className="text-center md:text-left">
              <Image
                src="/image/logo/mamyuk-logow.png"
                alt="MamYuk Logo"
                width={140}
                height={40}
                className="mx-auto md:mx-0 w-28 md:w-32 lg:w-[140px] h-auto"
              />
              <p className="mt-4 text-white/80 max-w-sm text-sm md:text-base">
                MamYuk - Solusi jajan di kantin tanpa antre, cashless, dan
                praktis untuk siswa
              </p>
            </div>
            <div className="flex gap-8 md:gap-16">
              <div>
                <h4 className="font-bold mb-3 md:mb-4 text-sm md:text-base">
                  Tentang
                </h4>
                <ul className="space-y-2 text-white/80 text-sm md:text-base">
                  <li>
                    <Link href="#" className="hover:text-white">
                      Tentang Kami
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white">
                      Cara Kerja
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white">
                      Kontak
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-3 md:mb-4 text-sm md:text-base">
                  Legal
                </h4>
                <ul className="space-y-2 text-white/80 text-sm md:text-base">
                  <li>
                    <Link href="#" className="hover:text-white">
                      Privasi
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white">
                      Syarat & Ketentuan
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 mt-6 md:mt-8 pt-6 md:pt-8 text-center text-white/70 text-xs md:text-sm">
            © 2025 MamYuk. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
