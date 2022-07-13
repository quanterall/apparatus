defmodule Apparatus.Repo do
  use Ecto.Repo,
    otp_app: :apparatus,
    adapter: Ecto.Adapters.Postgres
end
