-- Studappy · Supabase
-- La web usa Supabase para iniciar sesión y almacenar los mazos adquiridos.
-- La tabla de tienda/biblioteca está en supabase/tienda.sql.
-- Este archivo solo limpia las tablas antiguas de progreso y perfil.
--
-- Ejecuta esto en Supabase -> SQL Editor -> New query -> Run para
-- liberar el espacio de las tablas que ya no se usan.

drop table if exists public.section_progress;
drop table if exists public.user_state;
drop table if exists public.accesos_extra;
drop function if exists public.tiene_acceso(text, text);
