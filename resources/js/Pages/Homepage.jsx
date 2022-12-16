import { Head } from '@inertiajs/inertia-react'
import React from 'react'

export default function Homepage() {
  return (
    <>
        <Head title="Garden App" />
        <div className="App">
            <div className="Homepage">
                <div className="Navbar navbar bg-base-300 shadow-xl">
                    <div className="navbar-start">
                        <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Beranda</a></li>

                            <li tabIndex={0}>
                            <a className="justify-between">
                                Layanan
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
                            </a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                            </li>

                            <li tabIndex={1}>
                            <a className="justify-between">
                                Blog
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
                            </a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                            </li>
                            
                            <li tabIndex={2}>
                            <a className="justify-between">
                                Mitra
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
                            </a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                            </li>

                        </ul>
                        </div>

                        <a className="btn btn-ghost normal-case text-xl">Garden APP's</a>

                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                        <li><a>Beranda</a></li>

                            <li tabIndex={0}>
                            <a className="justify-between">
                                Layanan
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
                            </a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                            </li>

                            <li tabIndex={1}>
                            <a className="justify-between">
                                Blog
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
                            </a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                            </li>
                            
                            <li tabIndex={2}>
                            <a className="justify-between">
                                Mitra
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
                            </a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                            </li>

                        </ul>
                    </div>
                    <div className="navbar-end">
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                <img src="https://placeimg.com/80/80/people" />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                                </li>
                                <li><a>Settings</a></li>
                                <li><a>Logout</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="Mainpage-1 container mx-auto bg-slate-50 pt-10">
                    <div className="text-center">
                        <h2 className="text-4xl font-bold">Konsultasi Taman</h2>
                        <p className="py-5">Klik dibawah ini untuk memilih tanggal
                        & waktu yang tersedia untuk memanggil konsultan kami</p>
                    </div>
                </div>
                <div className="Mainpage-2 container mx-auto bg-slate-50 justify-center">
                    <div className="grid grid-rows-1 items-center justify-center gap-10">
                        <div className="grid mb-10 lg:grid-cols-2 gap-10">
                            <div className="card w-96 h-96 bg-base-100 shadow-xl">
                                <div className="card-body">
                                        <div class="bg-white rounded-t">
                                            <div class="px-4 flex items-center justify-between">
                                                <span  tabindex="0" class="focus:outline-none  text-base font-bold dark:text-gray-100 text-gray-800">October 2020</span>
                                                <div class="flex items-center">
                                                    <button aria-label="calendar backward" class="focus:text-gray-400 hover:text-gray-400 text-gray-800 dark:text-gray-100">
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-left" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                        <polyline points="15 6 9 12 15 18" />
                                                    </svg>
                                                </button>
                                                <button aria-label="calendar forward" class="focus:text-gray-400 hover:text-gray-400 ml-3 text-gray-800 dark:text-gray-100"> 
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler  icon-tabler-chevron-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                        <polyline points="9 6 15 12 9 18" />
                                                    </svg>
                                                </button>

                                                </div>
                                            </div>
                                            <div class="flex items-center justify-between pt-12 overflow-x-auto">
                                                <table class="w-full">
                                                    <thead>
                                                        <tr>
                                                            <th>
                                                                <div class="w-full flex justify-center">
                                                                    <p class="text-base font-medium text-center text-gray-800 dark:text-gray-100">Mo</p>
                                                                </div>
                                                            </th>
                                                            <th>
                                                                <div class="w-full flex justify-center">
                                                                    <p class="text-base font-medium text-center text-gray-800 dark:text-gray-100">Tu</p>
                                                                </div>
                                                            </th>
                                                            <th>
                                                                <div class="w-full flex justify-center">
                                                                    <p class="text-base font-medium text-center text-gray-800 dark:text-gray-100">We</p>
                                                                </div>
                                                            </th>
                                                            <th>
                                                                <div class="w-full flex justify-center">
                                                                    <p class="text-base font-medium text-center text-gray-800 dark:text-gray-100">Th</p>
                                                                </div>
                                                            </th>
                                                            <th>
                                                                <div class="w-full flex justify-center">
                                                                    <p class="text-base font-medium text-center text-gray-800 dark:text-gray-100">Fr</p>
                                                                </div>
                                                            </th>
                                                            <th>
                                                                <div class="w-full flex justify-center">
                                                                    <p class="text-base font-medium text-center text-gray-800 dark:text-gray-100">Sa</p>
                                                                </div>
                                                            </th>
                                                            <th>
                                                                <div class="w-full flex justify-center">
                                                                    <p class="text-base font-medium text-center text-gray-800 dark:text-gray-100">Su</p>
                                                                </div>
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td class="pt-6">
                                                                <div class="px-2 py-2 cursor-pointer flex w-full justify-center"></div>
                                                            </td>
                                                            <td class="pt-6">
                                                                <div class="px-2 py-2 cursor-pointer flex w-full justify-center"></div>
                                                            </td>
                                                            <td>
                                                                <div class="px-2 py-2 cursor-pointer flex w-full justify-center"></div>
                                                            </td>
                                                            <td class="pt-6">
                                                                <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                                                    <p class="text-base text-gray-500 dark:text-gray-100 font-medium">1</p>
                                                                </div>
                                                            </td>
                                                            <td class="pt-6">
                                                                <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                                                    <p class="text-base text-gray-500 dark:text-gray-100 font-medium">2</p>
                                                                </div>
                                                            </td>
                                                            <td class="pt-6">
                                                                <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                                                    <p class="text-base text-gray-500 dark:text-gray-100">3</p>
                                                                </div>
                                                            </td>
                                                            <td class="pt-6">
                                                                <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                                                    <p class="text-base text-gray-500 dark:text-gray-100">4</p>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                                                    <p class="text-base text-gray-500 dark:text-gray-100 font-medium">5</p>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                                                    <p class="text-base text-gray-500 dark:text-gray-100 font-medium">6</p>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                                                    <p class="text-base text-gray-500 dark:text-gray-100 font-medium">7</p>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div class="w-full h-full">
                                                                    <div class="flex items-center justify-center w-full rounded-full cursor-pointer">
                                                                        <a  role="link" tabindex="0" class="focus:outline-none  focus:ring-2 focus:ring-offset-2 focus:ring-green-700 focus:bg-green-500 hover:bg-green-500 text-base w-8 h-8 flex items-center justify-center font-medium text-white bg-green-700 rounded-full">8</a>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                                                    <p class="text-base text-gray-500 dark:text-gray-100 font-medium">9</p>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                                                    <p class="text-base text-gray-500 dark:text-gray-100">10</p>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                                                    <p class="text-base text-gray-500 dark:text-gray-100">11</p>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                                                    <p class="text-base text-gray-500 dark:text-gray-100 font-medium">12</p>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                                                    <p class="text-base text-gray-500 dark:text-gray-100 font-medium">13</p>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                                                    <p class="text-base text-gray-500 dark:text-gray-100 font-medium">14</p>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                                                    <p class="text-base text-gray-500 dark:text-gray-100 font-medium">15</p>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                                                    <p class="text-base text-gray-500 dark:text-gray-100 font-medium">16</p>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                                                    <p class="text-base text-gray-500 dark:text-gray-100">17</p>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                                                    <p class="text-base text-gray-500 dark:text-gray-100">18</p>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                                                    <p class="text-base text-gray-500 dark:text-gray-100 font-medium">19</p>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                                                    <p class="text-base text-gray-500 dark:text-gray-100 font-medium">20</p>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                                                    <p class="text-base text-gray-500 dark:text-gray-100 font-medium">21</p>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                                                    <p class="text-base text-gray-500 dark:text-gray-100 font-medium">22</p>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                                                    <p class="text-base text-gray-500 dark:text-gray-100 font-medium">23</p>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                                                    <p class="text-base text-gray-500 dark:text-gray-100">24</p>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                                                    <p class="text-base text-gray-500 dark:text-gray-100">25</p>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                                                    <p class="text-base text-gray-500 dark:text-gray-100 font-medium">26</p>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                                                    <p class="text-base text-gray-500 dark:text-gray-100 font-medium">27</p>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                                                    <p class="text-base text-gray-500 dark:text-gray-100 font-medium">28</p>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                                                    <p class="text-base text-gray-500 dark:text-gray-100 font-medium">29</p>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                                                    <p class="text-base text-gray-500 dark:text-gray-100 font-medium">30</p>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                </div>
                            </div>
                            <div className="card w-96 h-96 bg-base-100 shadow-xl">
                                <div className="card-body">
                                    <h2 className="card-title justify-center">Thursday</h2>
                                    <p className="text-center text-sm justify-center">October 8,2022</p>
                                    <p className="font-bold">Pilih Waktu</p>
                                    <p className="text-base">Durasi Konsultasi 30 menit</p>
                                    <div className="grid lg:grid-row-4 gap-2">
                                        <div className="grid lg:grid-cols-2 gap-2">
                                            <button className="btn btn-outline btn-info">09.00</button>
                                            <button className="btn btn-outline btn-info">13.00</button>   
                                        </div>
                                        <div className="grid lg:grid-cols-2 gap-2">
                                            <button className="btn btn-outline btn-info">10.00</button>
                                            <button className="btn btn-outline btn-info">14.00</button>   
                                        </div>
                                        <div className="grid lg:grid-cols-2 gap-2">
                                            <button className="btn btn-outline btn-info">11.00</button>
                                            <button className="btn btn-outline btn-info">15.00</button>   
                                        </div>
                                        <div className="grid lg:grid-cols-2 gap-2">
                                            <button className="btn btn-outline btn-info">12.00</button>
                                            <button className="btn btn-outline btn-info">16.00</button>   
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Mainpage-3 container mx-auto px-10 bg-slate-50 pt-10">
                        <div className="grid lg:grid-cols-1 
                        items-center justify-center ">
                            <div className="card w-full bg-base-100 rounded-none rounded-t-lg border">
                                <div className="card-body">
                                    <h2 className="card-title">Informasi Data Diri</h2>
                                    <div className="flex gap-10 py-3">
                                        <div className="form-control w-1/2 max-w-xs">
                                            <label className="label">
                                                <span className="label-text"><p className="font-bold">Nama Lengkap</p></span>
                                            </label>
                                            <input type="text" placeholder="Yudha Wahyu" className="input input-bordered w-full max-w-xs bg-gray-100" />
                                        </div>
                                        <div className="form-control w-1/2 max-w-xs ">
                                            <label className="label">
                                                <span className="label-text"><p className="font-bold">Nama Lengkap</p></span>
                                            </label>
                                            <input type="text" placeholder="+62 852 2234 4747" className="input input-bordered w-full max-w-xs bg-gray-100" />
                                        </div>
                                    </div>
                                    <div className="flex py-3">
                                        <div className="w-1/5">
                                            <p className="font-bold text-sm">Alamat</p>
                                        </div>
                                        <div className="w-5/6 border-2 border-green-700 rounded-lg">
                                            <div className="grid lg:grid-rows-2">
                                                <p className="p-2">Jl. serangkai 1 Perum. 
                                                Bumi Jaya blok A No. 12 Kelurahan samping, 
                                                Kecamaatan Baru, Kota Tanjungpinang, 
                                                Kepulauan Riau 29125, Indonesia</p>
                                                <button className="btn btn-link 
                                                text-green-700 decoration-green-700 
                                                justify-end">
                                                    Tambah Alamat Baru
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
                <div className="Mainpage-4 container mx-auto px-10 pb-20 bg-slate-50">
                    <div className="card w-full bg-base-100 rounded-none rounded-b-lg border">
                        <div className="card-body">
                            <h2 className="card-title">Informasi Konsultan Taman</h2>
                            <div className="py-5">
                                <p className="font-bold text-lg">Lahan Taman</p>
                                <p className="text-base">Pilih jumlah lahan taman yang akan dibuat.</p>
                                <div className="grid lg:grid-cols-3 gap-10 w-96 py-3">
                                    <button className="btn btn-outline normal-case btn-success w-32">
                                        1 Lahan Taman
                                    </button>
                                    <button className="btn btn-outline normal-case btn-success w-32">
                                        2 Lahan Taman
                                    </button>
                                    <button className="btn btn-outline normal-case btn-success w-32">
                                        Lebih dari 2 Lahan Taman
                                    </button>
                                </div>
                            </div>
                            <div className="py-5">
                                <p className="font-bold text-lg">Tema Taman</p>
                                <p className="text-base">Pilih tema yang akan dibuat.</p>
                                <div className="alert alert-warning shadow-lg w-96 m-5">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                                        <p><span className="font-bold">Catatan: </span>Jika anda belum memiliki 
                                        inspirasi tema taman maka anda bisa melewati tahapan ini, 
                                        konsultan kami akan memberikan rekomendasi terbaik untuk taman anda</p>
                                    </div>
                                </div>
                            </div>
                            <div className="grid lg:grid-cols-3">
                                <div className="card w-80 bg-base-100 shadow-xl">
                                    <figure><img src="https://media.istockphoto.com/id/1129781599/id/foto/jalan-setapak-batu-di-taman-bunga.jpg?s=612x612&w=is&k=20&c=S6jeoHuXlBd-B4Ft_TGKvFmLf_Z6dOxvGltft32yRp0=" 
                                    alt="Garden-1" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">Taman Minimalis</h2>
                                        <p>Taman yang indah dilahan yang sempit</p>
                                        <div className="card-actions justify-end">
                                                <button className="btn btn-link 
                                                text-green-700 decoration-green-700 
                                                justify-end">
                                                    Pilih
                                                </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="card w-80 bg-base-100 shadow-xl">
                                    <figure><img src="https://media.istockphoto.com/id/179294594/id/foto/jalan-setapak-di-kebun-raya.jpg?s=612x612&w=is&k=20&c=G0DthqFFTQvLuhBt9dmj1J0ssbeCzMvUNvLHftzoSRc=" 
                                    alt="Garden-2" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">Taman Kering</h2>
                                        <p>Taman yang dirancang untuk menghasilkan suasana alam 
                                            didalam dan diluar rumah
                                        </p>
                                        <div className="card-actions justify-end">
                                                <button className="btn btn-link 
                                                text-green-700 decoration-green-700 
                                                justify-end">
                                                    Pilih
                                                </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="card w-80 bg-base-100 shadow-xl">
                                    <figure><img src="https://media.istockphoto.com/id/1192014583/id/foto/rumput-yang-baru-dipotong.jpg?s=612x612&w=is&k=20&c=GRuSweAxnmtrtTwThpzVYi-jplPv0fOfSZQdnbNiE7Y=" 
                                    alt="Garden-3" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">Taman Tropis</h2>
                                        <p>Taman yang paling sesuai dengan iklim di indonesia</p>
                                        <div className="card-actions justify-end">
                                                <button className="btn btn-link 
                                                text-green-700 decoration-green-700 
                                                justify-end">
                                                    Pilih
                                                </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="py-5">
                                <h2 className="font-bold text-lg">Estimasi Ukuran Tanah</h2>
                                <div className="grid lg:grid-cols-7 py-5">
                                    <button className="btn btn-outline normal-case btn-success w-32">
                                        Kurang 10m2
                                    </button>
                                    <button className="btn btn-outline normal-case btn-success w-32">
                                        11-20m2
                                    </button>
                                    <button className="btn btn-outline normal-case btn-success w-32">
                                        21-30m2
                                    </button>
                                    <button className="btn btn-outline normal-case btn-success w-32">
                                        31-40m2
                                    </button>
                                    <button className="btn btn-outline normal-case btn-success w-32">
                                        41-50m2
                                    </button>
                                    <button className="btn btn-outline normal-case btn-success w-32">
                                        51-60m2
                                    </button>
                                    <button className="btn btn-outline normal-case btn-success w-32">
                                        Lebih 100m2
                                    </button>
                                </div>
                            </div>
                            <div className="card-actions justify-end">
                                <button className="btn btn-link 
                                text-green-700 no-underline normal-case">
                                    Batal
                                </button>
                                <button className="btn btn-primary 
                                bg-green-700 hover:bg-green-900 border-0">Ok</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    </>
  )
}
