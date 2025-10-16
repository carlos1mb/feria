import React, { useState, useEffect } from 'react';
import { User, BookOpen, Calendar, MessageSquare, BarChart3, Settings, LogOut, Bell, Search, Download, Upload, Users, GraduationCap, FileText, Home, Menu, X, ChevronDown, Plus, Edit, Trash2, Eye, Send, Filter, Clock, CheckCircle, AlertCircle } from 'lucide-react';

const EduGestionMVP = () => {
  // Estado principal
  const [currentUser, setCurrentUser] = useState(null);
  const [currentView, setCurrentView] = useState('login');
  const [notifications, setNotifications] = useState([]);
  const [showNotifications, setShowNotifications] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Datos de demostración
  const usuarios = {
    admin: { username: 'admin', password: 'admin123', role: 'directivo', nombre: 'Carlos Martínez', cargo: 'Rector' },
    docente1: { username: 'docente1', password: 'doc123', role: 'docente', nombre: 'María González', asignatura: 'Matemáticas' },
    docente2: { username: 'docente2', password: 'doc123', role: 'docente', nombre: 'Juan Pérez', asignatura: 'Español' },
    estudiante1: { username: 'est1', password: 'est123', role: 'estudiante', nombre: 'Ana López', grado: '11-A', codigo: '2025001' },
    estudiante2: { username: 'est2', password: 'est123', role: 'estudiante', nombre: 'Luis Ramírez', grado: '11-A', codigo: '2025002' },
    padre1: { username: 'padre1', password: 'pad123', role: 'padre', nombre: 'Roberto López', hijo: 'Ana López', grado: '11-A' }
  };

  const estudiantes = [
    { id: 1, codigo: '2025001', nombre: 'Ana López', grado: '11-A', promedio: 4.5, asistencia: 95 },
    { id: 2, codigo: '2025002', nombre: 'Luis Ramírez', grado: '11-A', promedio: 4.2, asistencia: 92 },
    { id: 3, codigo: '2025003', nombre: 'Sofía Castro', grado: '11-A', promedio: 4.8, asistencia: 98 },
    { id: 4, codigo: '2025004', nombre: 'Pedro Morales', grado: '11-A', promedio: 3.9, asistencia: 88 },
    { id: 5, codigo: '2025005', nombre: 'Laura Díaz', grado: '11-B', promedio: 4.6, asistencia: 96 },
    { id: 6, codigo: '2025006', nombre: 'Carlos Herrera', grado: '11-B', promedio: 4.1, asistencia: 90 },
  ];

  const calificaciones = {
    '2025001': {
      'Matemáticas': { p1: 4.5, p2: 4.6, p3: 4.4, final: 4.5 },
      'Español': { p1: 4.7, p2: 4.8, p3: 4.6, final: 4.7 },
      'Ciencias': { p1: 4.3, p2: 4.5, p3: 4.6, final: 4.5 },
      'Sociales': { p1: 4.4, p2: 4.6, p3: 4.5, final: 4.5 },
      'Inglés': { p1: 4.2, p2: 4.4, p3: 4.3, final: 4.3 },
    },
    '2025002': {
      'Matemáticas': { p1: 4.0, p2: 4.2, p3: 4.3, final: 4.2 },
      'Español': { p1: 4.1, p2: 4.3, p3: 4.2, final: 4.2 },
      'Ciencias': { p1: 4.3, p2: 4.1, p3: 4.2, final: 4.2 },
      'Sociales': { p1: 4.2, p2: 4.3, p3: 4.1, final: 4.2 },
      'Inglés': { p1: 4.0, p2: 4.1, p3: 4.2, final: 4.1 },
    }
  };

  const asistencia = {
    '2025001': [
      { fecha: '2025-10-01', estado: 'presente' },
      { fecha: '2025-10-02', estado: 'presente' },
      { fecha: '2025-10-03', estado: 'ausente' },
      { fecha: '2025-10-04', estado: 'presente' },
      { fecha: '2025-10-05', estado: 'presente' },
    ]
  };

  const anuncios = [
    { id: 1, titulo: 'Reunión de padres', contenido: 'Se les informa que el día 20 de octubre habrá reunión general de padres a las 2:00 PM', fecha: '2025-10-10', autor: 'Dirección', prioridad: 'alta' },
    { id: 2, titulo: 'Entrega de boletines', contenido: 'Los boletines del tercer periodo estarán disponibles a partir del 25 de octubre', fecha: '2025-10-12', autor: 'Coordinación Académica', prioridad: 'media' },
    { id: 3, titulo: 'Feria Empresarial SENATIC', contenido: 'Los estudiantes del programa de software participarán en la feria el 30 de octubre', fecha: '2025-10-14', autor: 'SENA', prioridad: 'alta' },
  ];

  const mensajes = [
    { id: 1, de: 'María González', para: 'Roberto López', asunto: 'Rendimiento de Ana', contenido: 'Estimado padre de familia, quiero informarle que Ana ha mostrado un excelente desempeño...', fecha: '2025-10-13', leido: true },
    { id: 2, de: 'Juan Pérez', para: 'Roberto López', asunto: 'Tarea pendiente', contenido: 'Por favor recordarle a su hija que debe entregar la tarea de español...', fecha: '2025-10-14', leido: false },
  ];

  // Componente de Login
  const LoginView = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = (e) => {
      e.preventDefault();
      const user = usuarios[username];
      if (user && user.password === password) {
        setCurrentUser(user);
        setCurrentView('dashboard');
        setError('');
        // Agregar notificaciones de ejemplo
        setNotifications([
          { id: 1, texto: 'Bienvenido al sistema EduGestión', tipo: 'success' },
          { id: 2, texto: 'Tienes 3 mensajes nuevos', tipo: 'info' }
        ]);
      } else {
        setError('Usuario o contraseña incorrectos');
      }
    };

    const usuarios_demo = [
      { user: 'admin', pass: 'admin123', rol: 'Directivo' },
      { user: 'docente1', pass: 'doc123', rol: 'Docente' },
      { user: 'est1', pass: 'est123', rol: 'Estudiante' },
      { user: 'padre1', pass: 'pad123', rol: 'Padre de Familia' }
    ];

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-orange-600 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl overflow-hidden grid md:grid-cols-2">
          {/* Panel izquierdo - Información */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-12 text-white flex flex-col justify-center">
            <div className="mb-8">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-white p-4 rounded-full">
                  <GraduationCap className="h-16 w-16 text-blue-600" />
                </div>
              </div>
              <h1 className="text-4xl font-bold mb-4 text-center">EduGestión S.A.S.</h1>
              <p className="text-blue-100 text-center text-lg italic">"Gestión inteligente para una educación organizada"</p>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold">Gestión Académica Integral</h3>
                  <p className="text-sm text-blue-100">Control completo de calificaciones y asistencia</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold">Comunicación Efectiva</h3>
                  <p className="text-sm text-blue-100">Conexión directa entre docentes y familias</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold">100% en la Nube</h3>
                  <p className="text-sm text-blue-100">Acceso desde cualquier dispositivo</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-700 bg-opacity-50 rounded-lg p-4 text-sm">
              <p className="font-semibold mb-2">Desarrollado por:</p>
              <p className="text-blue-100">Estudiantes SENA - Escuela Normal Superior de Corozal</p>
              <p className="text-blue-100">Programa Técnico en Programación de Software</p>
            </div>
          </div>

          {/* Panel derecho - Formulario */}
          <div className="p-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Iniciar Sesión</h2>
            <p className="text-gray-600 mb-8">Ingresa tus credenciales para acceder</p>

            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Usuario</label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Ingresa tu usuario"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Contraseña</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Ingresa tu contraseña"
                  required
                />
              </div>

              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-center">
                  <AlertCircle className="h-5 w-5 mr-2" />
                  {error}
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all transform hover:scale-105 shadow-lg"
              >
                Ingresar al Sistema
              </button>
            </form>

            <div className="mt-8 border-t pt-6">
              <p className="text-sm text-gray-600 font-semibold mb-3">Usuarios de demostración:</p>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {usuarios_demo.map((u, i) => (
                  <div key={i} className="bg-gray-50 p-2 rounded border border-gray-200">
                    <p className="font-semibold text-blue-600">{u.rol}</p>
                    <p className="text-gray-600">User: <span className="font-mono">{u.user}</span></p>
                    <p className="text-gray-600">Pass: <span className="font-mono">{u.pass}</span></p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Navbar
  const Navbar = () => (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
      <div className="px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-blue-600 to-orange-500 p-2 rounded-lg">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800">EduGestión</h1>
                <p className="text-xs text-gray-500">Sistema de Gestión Educativa</p>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className="relative p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <Bell className="h-5 w-5 text-gray-600" />
                {notifications.length > 0 && (
                  <span className="absolute top-1 right-1 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
                    {notifications.length}
                  </span>
                )}
              </button>
              
              {showNotifications && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                  <div className="px-4 py-2 border-b border-gray-200">
                    <h3 className="font-semibold text-gray-800">Notificaciones</h3>
                  </div>
                  {notifications.map(notif => (
                    <div key={notif.id} className="px-4 py-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100">
                      <p className="text-sm text-gray-700">{notif.texto}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="flex items-center space-x-3 pl-4 border-l border-gray-200">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-semibold text-gray-800">{currentUser.nombre}</p>
                <p className="text-xs text-gray-500 capitalize">{currentUser.role}</p>
              </div>
              <div className="h-10 w-10 bg-gradient-to-br from-blue-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                {currentUser.nombre.charAt(0)}
              </div>
            </div>

            <button
              onClick={() => {
                setCurrentUser(null);
                setCurrentView('login');
                setNotifications([]);
              }}
              className="p-2 rounded-lg hover:bg-red-50 text-red-600 transition-colors"
              title="Cerrar sesión"
            >
              <LogOut className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );

  // Sidebar
  const Sidebar = () => {
    const menuItems = {
      directivo: [
        { id: 'dashboard', icon: Home, label: 'Dashboard' },
        { id: 'estudiantes', icon: Users, label: 'Estudiantes' },
        { id: 'docentes', icon: GraduationCap, label: 'Docentes' },
        { id: 'calificaciones', icon: BookOpen, label: 'Calificaciones' },
        { id: 'asistencia', icon: Calendar, label: 'Asistencia' },
        { id: 'reportes', icon: BarChart3, label: 'Reportes' },
        { id: 'anuncios', icon: Bell, label: 'Anuncios' },
        { id: 'mensajes', icon: MessageSquare, label: 'Mensajes' },
        { id: 'configuracion', icon: Settings, label: 'Configuración' },
      ],
      docente: [
        { id: 'dashboard', icon: Home, label: 'Dashboard' },
        { id: 'mis-estudiantes', icon: Users, label: 'Mis Estudiantes' },
        { id: 'calificaciones', icon: BookOpen, label: 'Calificaciones' },
        { id: 'asistencia', icon: Calendar, label: 'Asistencia' },
        { id: 'anuncios', icon: Bell, label: 'Anuncios' },
        { id: 'mensajes', icon: MessageSquare, label: 'Mensajes' },
      ],
      estudiante: [
        { id: 'dashboard', icon: Home, label: 'Inicio' },
        { id: 'mis-notas', icon: BookOpen, label: 'Mis Notas' },
        { id: 'asistencia', icon: Calendar, label: 'Mi Asistencia' },
        { id: 'anuncios', icon: Bell, label: 'Anuncios' },
        { id: 'mensajes', icon: MessageSquare, label: 'Mensajes' },
      ],
      padre: [
        { id: 'dashboard', icon: Home, label: 'Inicio' },
        { id: 'rendimiento', icon: BarChart3, label: 'Rendimiento' },
        { id: 'asistencia', icon: Calendar, label: 'Asistencia' },
        { id: 'anuncios', icon: Bell, label: 'Anuncios' },
        { id: 'mensajes', icon: MessageSquare, label: 'Mensajes' },
      ]
    };

    const items = menuItems[currentUser.role] || [];

    return (
      <aside className={`${mobileMenuOpen ? 'block' : 'hidden'} lg:block w-64 bg-white border-r border-gray-200 min-h-screen`}>
        <div className="p-4 space-y-1">
          {items.map(item => (
            <button
              key={item.id}
              onClick={() => {
                setCurrentView(item.id);
                setMobileMenuOpen(false);
              }}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                currentView === item.id
                  ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-md'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <item.icon className="h-5 w-5" />
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </div>
      </aside>
    );
  };

  // Dashboard Views
  const DashboardDirectivo = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">Dashboard Institucional</h2>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center space-x-2">
          <Download className="h-4 w-4" />
          <span>Exportar Reporte</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <Users className="h-8 w-8" />
            <span className="text-3xl font-bold">458</span>
          </div>
          <p className="text-blue-100">Estudiantes Activos</p>
        </div>

        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <GraduationCap className="h-8 w-8" />
            <span className="text-3xl font-bold">32</span>
          </div>
          <p className="text-green-100">Docentes</p>
        </div>

        <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-6 text-white shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <BarChart3 className="h-8 w-8" />
            <span className="text-3xl font-bold">4.3</span>
          </div>
          <p className="text-orange-100">Promedio General</p>
        </div>

        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <Calendar className="h-8 w-8" />
            <span className="text-3xl font-bold">93%</span>
          </div>
          <p className="text-purple-100">Asistencia</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Rendimiento por Grado</h3>
          <div className="space-y-3">
            {['11-A', '11-B', '10-A', '10-B', '9-A'].map(grado => (
              <div key={grado}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">{grado}</span>
                  <span className="text-sm font-bold text-blue-600">{(Math.random() * 1 + 3.5).toFixed(1)}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full" style={{ width: `${Math.random() * 30 + 70}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Actividad Reciente</h3>
          <div className="space-y-4">
            <div className="flex items-start space-x-3 pb-3 border-b border-gray-100">
              <div className="bg-blue-100 p-2 rounded-lg">
                <BookOpen className="h-4 w-4 text-blue-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-800">Calificaciones actualizadas</p>
                <p className="text-xs text-gray-500">María González - Matemáticas 11-A</p>
              </div>
              <span className="text-xs text-gray-400">Hace 2h</span>
            </div>
            <div className="flex items-start space-x-3 pb-3 border-b border-gray-100">
              <div className="bg-green-100 p-2 rounded-lg">
                <Calendar className="h-4 w-4 text-green-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-800">Asistencia registrada</p>
                <p className="text-xs text-gray-500">Juan Pérez - Español 11-B</p>
              </div>
              <span className="text-xs text-gray-400">Hace 3h</span>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-orange-100 p-2 rounded-lg">
                <Bell className="h-4 w-4 text-orange-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-800">Nuevo anuncio publicado</p>
                <p className="text-xs text-gray-500">Reunión de padres - 20 de octubre</p>
              </div>
              <span className="text-xs text-gray-400">Hace 5h</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const EstudiantesView = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">Gestión de Estudiantes</h2>
        <div className="flex space-x-3">
          <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center space-x-2">
            <Upload className="h-4 w-4" />
            <span>Importar</span>
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center space-x-2">
            <Plus className="h-4 w-4" />
            <span>Nuevo Estudiante</span>
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar por nombre o código..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
            <option>Todos los grados</option>
            <option>11-A</option>
            <option>11-B</option>
            <option>10-A</option>
            <option>10-B</option>
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Código</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Nombre</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Grado</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Promedio</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Asistencia</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {estudiantes.map(est => (
                <tr key={est.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-3 text-sm font-mono text-gray-600">{est.codigo}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center space-x-3">
                      <div className="h-8 w-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                        {est.nombre.charAt(0)}
                      </div>
                      <span className="text-sm font-medium text-gray-800">{est.nombre}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-600">{est.grado}</td>
                  <td className="px-4 py-3">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      est.promedio >= 4.5 ? 'bg-green-100 text-green-800' :
                      est.promedio >= 4.0 ? 'bg-blue-100 text-blue-800' :
                      est.promedio >= 3.5 ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {est.promedio.toFixed(1)}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      est.asistencia >= 95 ? 'bg-green-100 text-green-800' :
                      est.asistencia >= 85 ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {est.asistencia}%
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex space-x-2">
                      <button className="p-1 text-blue-600 hover:bg-blue-50 rounded" title="Ver perfil">
                        <Eye className="h-4 w-4" />
                      </button>
                      <button className="p-1 text-green-600 hover:bg-green-50 rounded" title="Editar">
                        <Edit className="h-4 w-4" />
                      </button>
                      <button className="p-1 text-red-600 hover:bg-red-50 rounded" title="Eliminar">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const CalificacionesView = () => {
    const [selectedGrado, setSelectedGrado] = useState('11-A');
    const [selectedAsignatura, setSelectedAsignatura] = useState('Matemáticas');

    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-800">Gestión de Calificaciones</h2>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center space-x-2">
            <Download className="h-4 w-4" />
            <span>Exportar Boletines</span>
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <select 
              value={selectedGrado}
              onChange={(e) => setSelectedGrado(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            >
              <option>11-A</option>
              <option>11-B</option>
              <option>10-A</option>
              <option>10-B</option>
            </select>

            <select 
              value={selectedAsignatura}
              onChange={(e) => setSelectedAsignatura(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            >
              <option>Matemáticas</option>
              <option>Español</option>
              <option>Ciencias</option>
              <option>Sociales</option>
              <option>Inglés</option>
            </select>

            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
              <option>Periodo 1</option>
              <option>Periodo 2</option>
              <option>Periodo 3</option>
              <option>Periodo 4</option>
            </select>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Estudiante</th>
                  <th className="px-4 py-3 text-center text-xs font-semibold text-gray-600 uppercase">P1</th>
                  <th className="px-4 py-3 text-center text-xs font-semibold text-gray-600 uppercase">P2</th>
                  <th className="px-4 py-3 text-center text-xs font-semibold text-gray-600 uppercase">P3</th>
                  <th className="px-4 py-3 text-center text-xs font-semibold text-gray-600 uppercase">Final</th>
                  <th className="px-4 py-3 text-center text-xs font-semibold text-gray-600 uppercase">Estado</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {estudiantes.filter(e => e.grado === selectedGrado).map(est => {
                  const notas = calificaciones[est.codigo]?.[selectedAsignatura] || { p1: 0, p2: 0, p3: 0, final: 0 };
                  return (
                    <tr key={est.id} className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-sm font-medium text-gray-800">{est.nombre}</td>
                      <td className="px-4 py-3 text-center">
                        <input 
                          type="number" 
                          step="0.1" 
                          min="0" 
                          max="5" 
                          defaultValue={notas.p1}
                          className="w-16 px-2 py-1 text-center border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                        />
                      </td>
                      <td className="px-4 py-3 text-center">
                        <input 
                          type="number" 
                          step="0.1" 
                          min="0" 
                          max="5" 
                          defaultValue={notas.p2}
                          className="w-16 px-2 py-1 text-center border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                        />
                      </td>
                      <td className="px-4 py-3 text-center">
                        <input 
                          type="number" 
                          step="0.1" 
                          min="0" 
                          max="5" 
                          defaultValue={notas.p3}
                          className="w-16 px-2 py-1 text-center border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                        />
                      </td>
                      <td className="px-4 py-3 text-center">
                        <span className="font-bold text-blue-600">{notas.final.toFixed(1)}</span>
                      </td>
                      <td className="px-4 py-3 text-center">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          notas.final >= 3.5 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                        }`}>
                          {notas.final >= 3.5 ? 'Aprobado' : 'Reprobado'}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="mt-6 flex justify-end space-x-3">
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              Cancelar
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Guardar Cambios
            </button>
          </div>
        </div>
      </div>
    );
  };

  const AsistenciaView = () => {
    const [selectedDate, setSelectedDate] = useState('2025-10-15');
    const [selectedGrado, setSelectedGrado] = useState('11-A');

    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-800">Control de Asistencia</h2>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center space-x-2">
            <Download className="h-4 w-4" />
            <span>Exportar Reporte</span>
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Fecha</label>
              <input 
                type="date" 
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Grado</label>
              <select 
                value={selectedGrado}
                onChange={(e) => setSelectedGrado(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                <option>11-A</option>
                <option>11-B</option>
                <option>10-A</option>
                <option>10-B</option>
              </select>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Código</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Estudiante</th>
                  <th className="px-4 py-3 text-center text-xs font-semibold text-gray-600 uppercase">Estado</th>
                  <th className="px-4 py-3 text-center text-xs font-semibold text-gray-600 uppercase">Observaciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {estudiantes.filter(e => e.grado === selectedGrado).map(est => (
                  <tr key={est.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm font-mono text-gray-600">{est.codigo}</td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-800">{est.nombre}</td>
                    <td className="px-4 py-3 text-center">
                      <div className="flex justify-center space-x-2">
                        <button className="px-3 py-1 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 text-sm font-medium">
                          Presente
                        </button>
                        <button className="px-3 py-1 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 text-sm font-medium">
                          Ausente
                        </button>
                        <button className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-lg hover:bg-yellow-200 text-sm font-medium">
                          Tardanza
                        </button>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <input 
                        type="text" 
                        placeholder="Observaciones..."
                        className="w-full px-3 py-1 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 flex justify-end">
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium">
              Guardar Asistencia
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-800">Presentes</h3>
              <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
            </div>
            <p className="text-3xl font-bold text-green-600">24</p>
            <p className="text-sm text-gray-500 mt-1">93% de asistencia</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-800">Ausentes</h3>
              <div className="h-12 w-12 bg-red-100 rounded-full flex items-center justify-center">
                <AlertCircle className="h-6 w-6 text-red-600" />
              </div>
            </div>
            <p className="text-3xl font-bold text-red-600">2</p>
            <p className="text-sm text-gray-500 mt-1">7% de ausencias</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-800">Tardanzas</h3>
              <div className="h-12 w-12 bg-yellow-100 rounded-full flex items-center justify-center">
                <Clock className="h-6 w-6 text-yellow-600" />
              </div>
            </div>
            <p className="text-3xl font-bold text-yellow-600">1</p>
            <p className="text-sm text-gray-500 mt-1">Llegadas tarde</p>
          </div>
        </div>
      </div>
    );
  };

  const AnunciosView = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">Anuncios Institucionales</h2>
        {currentUser.role === 'directivo' && (
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center space-x-2">
            <Plus className="h-4 w-4" />
            <span>Nuevo Anuncio</span>
          </button>
        )}
      </div>

      <div className="space-y-4">
        {anuncios.map(anuncio => (
          <div key={anuncio.id} className="bg-white rounded-xl shadow-md p-6 border-l-4 border-gray-200 hover:shadow-lg transition-shadow"
               style={{ borderLeftColor: anuncio.prioridad === 'alta' ? '#ef4444' : anuncio.prioridad === 'media' ? '#f59e0b' : '#3b82f6' }}>
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h3 className="text-lg font-bold text-gray-800">{anuncio.titulo}</h3>
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                    anuncio.prioridad === 'alta' ? 'bg-red-100 text-red-700' :
                    anuncio.prioridad === 'media' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-blue-100 text-blue-700'
                  }`}>
                    {anuncio.prioridad === 'alta' ? 'Urgente' : anuncio.prioridad === 'media' ? 'Importante' : 'Normal'}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-3">{anuncio.contenido}</p>
                <div className="flex items-center space-x-4 text-xs text-gray-500">
                  <span className="flex items-center">
                    <User className="h-3 w-3 mr-1" />
                    {anuncio.autor}
                  </span>
                  <span className="flex items-center">
                    <Calendar className="h-3 w-3 mr-1" />
                    {anuncio.fecha}
                  </span>
                </div>
              </div>
              {currentUser.role === 'directivo' && (
                <div className="flex space-x-2">
                  <button className="p-2 text-blue-600 hover:bg-blue-50 rounded">
                    <Edit className="h-4 w-4" />
                  </button>
                  <button className="p-2 text-red-600 hover:bg-red-50 rounded">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const MensajesView = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">Mensajería</h2>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center space-x-2">
          <Plus className="h-4 w-4" />
          <span>Nuevo Mensaje</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 bg-white rounded-xl shadow-md border border-gray-200">
          <div className="p-4 border-b border-gray-200">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar mensajes..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm"
              />
            </div>
          </div>
          <div className="divide-y divide-gray-200">
            {mensajes.map(mensaje => (
              <div key={mensaje.id} className={`p-4 hover:bg-gray-50 cursor-pointer ${!mensaje.leido ? 'bg-blue-50' : ''}`}>
                <div className="flex items-start space-x-3">
                  <div className="h-10 w-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                    {mensaje.de.charAt(0)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-gray-800 truncate">{mensaje.de}</p>
                    <p className="text-xs text-gray-600 truncate">{mensaje.asunto}</p>
                    <p className="text-xs text-gray-400 mt-1">{mensaje.fecha}</p>
                  </div>
                  {!mensaje.leido && (
                    <div className="h-2 w-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2 bg-white rounded-xl shadow-md border border-gray-200 p-6">
          <div className="border-b border-gray-200 pb-4 mb-4">
            <h3 className="text-lg font-bold text-gray-800 mb-2">Rendimiento de Ana</h3>
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <span className="flex items-center">
                <User className="h-4 w-4 mr-1" />
                María González
              </span>
              <span className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                2025-10-13
              </span>
            </div>
          </div>
          <div className="prose max-w-none">
            <p className="text-gray-700 mb-4">Estimado padre de familia,</p>
            <p className="text-gray-700 mb-4">
              Quiero informarle que Ana ha mostrado un excelente desempeño académico durante este periodo. 
              Su dedicación y responsabilidad son ejemplares. Ha obtenido calificaciones destacadas en todas 
              las evaluaciones y participa activamente en clase.
            </p>
            <p className="text-gray-700 mb-4">
              Le sugiero que continúe motivándola en sus estudios. Si tiene alguna pregunta o inquietud, 
              no dude en contactarme.
            </p>
            <p className="text-gray-700">Cordialmente,<br/>María González<br/>Docente de Matemáticas</p>
          </div>
          <div className="mt-6 pt-4 border-t border-gray-200">
            <textarea 
              placeholder="Escribir respuesta..."
              rows="3"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <div className="mt-3 flex justify-end">
              <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center space-x-2">
                <Send className="h-4 w-4" />
                <span>Enviar Respuesta</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const ReportesView = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Reportes y Estadísticas</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Generar Reportes</h3>
          <div className="space-y-4">
            <button className="w-full flex items-center justify-between p-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="flex items-center space-x-3">
                <FileText className="h-5 w-5 text-blue-600" />
                <span className="font-medium text-gray-800">Boletines de Calificaciones</span>
              </div>
              <Download className="h-5 w-5 text-gray-400" />
            </button>

            <button className="w-full flex items-center justify-between p-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="flex items-center space-x-3">
                <Calendar className="h-5 w-5 text-green-600" />
                <span className="font-medium text-gray-800">Reporte de Asistencia</span>
              </div>
              <Download className="h-5 w-5 text-gray-400" />
            </button>

            <button className="w-full flex items-center justify-between p-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="flex items-center space-x-3">
                <BarChart3 className="h-5 w-5 text-orange-600" />
                <span className="font-medium text-gray-800">Estadísticas Generales</span>
              </div>
              <Download className="h-5 w-5 text-gray-400" />
            </button>

            <button className="w-full flex items-center justify-between p-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="flex items-center space-x-3">
                <Users className="h-5 w-5 text-purple-600" />
                <span className="font-medium text-gray-800">Listado de Estudiantes</span>
              </div>
              <Download className="h-5 w-5 text-gray-400" />
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Estadísticas del Periodo</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
              <span className="text-sm font-medium text-gray-700">Total Estudiantes</span>
              <span className="text-xl font-bold text-blue-600">458</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <span className="text-sm font-medium text-gray-700">Promedio Institucional</span>
              <span className="text-xl font-bold text-green-600">4.3</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
              <span className="text-sm font-medium text-gray-700">Asistencia Promedio</span>
              <span className="text-xl font-bold text-orange-600">93%</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
              <span className="text-sm font-medium text-gray-700">Aprobación</span>
              <span className="text-xl font-bold text-purple-600">96%</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Rendimiento por Asignatura</h3>
        <div className="space-y-3">
          {['Matemáticas', 'Español', 'Ciencias', 'Sociales', 'Inglés', 'Educación Física'].map(asig => (
            <div key={asig}>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-700">{asig}</span>
                <span className="text-sm font-bold text-blue-600">{(Math.random() * 1 + 3.5).toFixed(1)}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-2.5 rounded-full transition-all" style={{ width: `${Math.random() * 30 + 65}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const MisNotasView = () => {
    const estudianteData = currentUser.role === 'estudiante' ? calificaciones['2025001'] : {};
    
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-800">Mis Calificaciones</h2>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center space-x-2">
            <Download className="h-4 w-4" />
            <span>Descargar Boletín</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white shadow-lg">
            <p className="text-blue-100 mb-2">Promedio General</p>
            <p className="text-4xl font-bold">4.5</p>
          </div>
          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white shadow-lg">
            <p className="text-green-100 mb-2">Asistencia</p>
            <p className="text-4xl font-bold">95%</p>
          </div>
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-6 text-white shadow-lg">
            <p className="text-orange-100 mb-2">Materias</p>
            <p className="text-4xl font-bold">5</p>
          </div>
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white shadow-lg">
            <p className="text-purple-100 mb-2">Periodo Actual</p>
            <p className="text-4xl font-bold">3</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Detalle de Calificaciones</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Asignatura</th>
                  <th className="px-4 py-3 text-center text-xs font-semibold text-gray-600 uppercase">Periodo 1</th>
                  <th className="px-4 py-3 text-center text-xs font-semibold text-gray-600 uppercase">Periodo 2</th>
                  <th className="px-4 py-3 text-center text-xs font-semibold text-gray-600 uppercase">Periodo 3</th>
                  <th className="px-4 py-3 text-center text-xs font-semibold text-gray-600 uppercase">Definitiva</th>
                  <th className="px-4 py-3 text-center text-xs font-semibold text-gray-600 uppercase">Estado</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {Object.entries(estudianteData).map(([asignatura, notas]) => (
                  <tr key={asignatura} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm font-medium text-gray-800">{asignatura}</td>
                    <td className="px-4 py-3 text-center text-sm font-semibold text-gray-700">{notas.p1}</td>
                    <td className="px-4 py-3 text-center text-sm font-semibold text-gray-700">{notas.p2}</td>
                    <td className="px-4 py-3 text-center text-sm font-semibold text-gray-700">{notas.p3}</td>
                    <td className="px-4 py-3 text-center">
                      <span className={`inline-flex px-3 py-1 text-sm font-bold rounded-full ${
                        notas.final >= 4.5 ? 'bg-green-100 text-green-800' :
                        notas.final >= 4.0 ? 'bg-blue-100 text-blue-800' :
                        notas.final >= 3.5 ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {notas.final.toFixed(1)}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-center">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        notas.final >= 3.5 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {notas.final >= 3.5 ? 'Aprobado' : 'Reprobado'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Fortalezas</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-green-700">
                <CheckCircle className="h-5 w-5 mr-2" />
                <span>Excelente desempeño en Español</span>
              </li>
              <li className="flex items-center text-green-700">
                <CheckCircle className="h-5 w-5 mr-2" />
                <span>Buena asistencia a clases</span>
              </li>
              <li className="flex items-center text-green-700">
                <CheckCircle className="h-5 w-5 mr-2" />
                <span>Participación activa</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Recomendaciones</h3>
            <ul className="space-y-2">
              <li className="flex items-start text-gray-700">
                <AlertCircle className="h-5 w-5 mr-2 text-orange-500 flex-shrink-0 mt-0.5" />
                <span>Reforzar conceptos de Inglés</span>
              </li>
              <li className="flex items-start text-gray-700">
                <AlertCircle className="h-5 w-5 mr-2 text-orange-500 flex-shrink-0 mt-0.5" />
                <span>Continuar con el buen ritmo de estudio</span>
              </li>
              <li className="flex items-start text-gray-700">
                <AlertCircle className="h-5 w-5 mr-2 text-orange-500 flex-shrink-0 mt-0.5" />
                <span>Prepararse para exámenes finales</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  };

  const RendimientoPadreView = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Rendimiento de {currentUser.hijo}</h2>
          <p className="text-gray-600">Grado: {currentUser.grado}</p>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center space-x-2">
          <Download className="h-4 w-4" />
          <span>Descargar Informe</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <BookOpen className="h-8 w-8" />
            <span className="text-3xl font-bold">4.5</span>
          </div>
          <p className="text-blue-100">Promedio General</p>
        </div>

        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <Calendar className="h-8 w-8" />
            <span className="text-3xl font-bold">95%</span>
          </div>
          <p className="text-green-100">Asistencia</p>
        </div>

        <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-6 text-white shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <CheckCircle className="h-8 w-8" />
            <span className="text-3xl font-bold">5/5</span>
          </div>
          <p className="text-orange-100">Materias Aprobadas</p>
        </div>

        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <BarChart3 className="h-8 w-8" />
            <span className="text-3xl font-bold">3°</span>
          </div>
          <p className="text-purple-100">Posición en Clase</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Calificaciones por Asignatura</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Asignatura</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Docente</th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-gray-600 uppercase">P1</th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-gray-600 uppercase">P2</th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-gray-600 uppercase">P3</th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-gray-600 uppercase">Definitiva</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {Object.entries(calificaciones['2025001']).map(([asignatura, notas]) => (
                <tr key={asignatura} className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm font-medium text-gray-800">{asignatura}</td>
                  <td className="px-4 py-3 text-sm text-gray-600">
                    {asignatura === 'Matemáticas' ? 'María González' : 'Juan Pérez'}
                  </td>
                  <td className="px-4 py-3 text-center text-sm">{notas.p1}</td>
                  <td className="px-4 py-3 text-center text-sm">{notas.p2}</td>
                  <td className="px-4 py-3 text-center text-sm">{notas.p3}</td>
                  <td className="px-4 py-3 text-center">
                    <span className={`inline-flex px-3 py-1 text-sm font-bold rounded-full ${
                      notas.final >= 4.5 ? 'bg-green-100 text-green-800' :
                      notas.final >= 4.0 ? 'bg-blue-100 text-blue-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {notas.final.toFixed(1)}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Observaciones del Docente</h3>
          <div className="space-y-4">
            <div className="p-4 bg-green-50 border-l-4 border-green-500 rounded">
              <p className="text-sm font-semibold text-green-800 mb-1">Matemáticas - María González</p>
              <p className="text-sm text-gray-700">Excelente desempeño. Estudiante dedicada y responsable. Participa activamente en clase.</p>
            </div>
            <div className="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
              <p className="text-sm font-semibold text-blue-800 mb-1">Español - Juan Pérez</p>
              <p className="text-sm text-gray-700">Muy buen rendimiento en comprensión lectora. Continuar así.</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Evolución del Periodo</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">Periodo 1</span>
                <span className="text-sm font-bold text-blue-600">4.4</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-gradient-to-r from-blue-400 to-blue-500 h-2.5 rounded-full" style={{ width: '88%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">Periodo 2</span>
                <span className="text-sm font-bold text-blue-600">4.5</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-2.5 rounded-full" style={{ width: '90%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">Periodo 3</span>
                <span className="text-sm font-bold text-green-600">4.6</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-gradient-to-r from-green-500 to-green-600 h-2.5 rounded-full" style={{ width: '92%' }}></div>
              </div>
            </div>
            <div className="mt-4 p-3 bg-green-50 rounded-lg">
              <p className="text-sm text-green-800 font-medium flex items-center">
                <CheckCircle className="h-4 w-4 mr-2" />
                Tendencia positiva en el rendimiento
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const ConfiguracionView = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Configuración del Sistema</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Información Institucional</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Nombre de la Institución</label>
              <input 
                type="text" 
                defaultValue="Escuela Normal Superior de Corozal"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">NIT</label>
              <input 
                type="text" 
                defaultValue="800.123.456-7"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Dirección</label>
              <input 
                type="text" 
                defaultValue="Calle Principal #10-50, Corozal, Sucre"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Teléfono</label>
              <input 
                type="tel" 
                defaultValue="(5) 2841234"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Configuración del Año Escolar</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Año Lectivo</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                <option>2025</option>
                <option>2026</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Periodo Actual</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                <option>Periodo 1</option>
                <option>Periodo 2</option>
                <option>Periodo 3</option>
                <option>Periodo 4</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Fecha Inicio Periodo</label>
              <input 
                type="date" 
                defaultValue="2025-09-01"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Fecha Fin Periodo</label>
              <input 
                type="date" 
                defaultValue="2025-11-30"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Opciones Avanzadas</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div>
                <p className="font-medium text-gray-800">Notificaciones por Email</p>
                <p className="text-sm text-gray-500">Enviar alertas automáticas</p>
              </div>
              <input type="checkbox" defaultChecked className="h-5 w-5 text-blue-600" />
            </div>
            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div>
                <p className="font-medium text-gray-800">Respaldo Automático</p>
                <p className="text-sm text-gray-500">Copia de seguridad diaria</p>
              </div>
              <input type="checkbox" defaultChecked className="h-5 w-5 text-blue-600" />
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div>
                <p className="font-medium text-gray-800">Modo Mantenimiento</p>
                <p className="text-sm text-gray-500">Desactivar acceso temporal</p>
              </div>
              <input type="checkbox" className="h-5 w-5 text-blue-600" />
            </div>
            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div>
                <p className="font-medium text-gray-800">Auditoría de Cambios</p>
                <p className="text-sm text-gray-500">Registrar modificaciones</p>
              </div>
              <input type="checkbox" defaultChecked className="h-5 w-5 text-blue-600" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end space-x-3">
        <button className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
          Cancelar
        </button>
        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Guardar Cambios
        </button>
      </div>
    </div>
  );

  // Renderizado principal
  const renderContent = () => {
    if (currentView === 'dashboard') {
      if (currentUser.role === 'directivo') return <DashboardDirectivo />;
      if (currentUser.role === 'docente') return <DashboardDirectivo />;
      if (currentUser.role === 'estudiante') return <MisNotasView />;
      if (currentUser.role === 'padre') return <RendimientoPadreView />;
    }
    
    switch(currentView) {
      case 'estudiantes': return <EstudiantesView />;
      case 'mis-estudiantes': return <EstudiantesView />;
      case 'calificaciones': return <CalificacionesView />;
      case 'mis-notas': return <MisNotasView />;
      case 'asistencia': return <AsistenciaView />;
      case 'anuncios': return <AnunciosView />;
      case 'mensajes': return <MensajesView />;
      case 'reportes': return <ReportesView />;
      case 'rendimiento': return <RendimientoPadreView />;
      case 'configuracion': return <ConfiguracionView />;
      default: return <DashboardDirectivo />;
    }
  };

  if (!currentUser) {
    return <LoginView />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6 lg:p-8">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default EduGestionMVP;