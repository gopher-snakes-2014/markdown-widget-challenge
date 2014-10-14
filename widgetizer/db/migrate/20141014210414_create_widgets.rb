class CreateWidgets < ActiveRecord::Migration
  def change
    create_table :widgets do |t|
      t.text :input
      t.text :output
      t.timestamps
    end
  end
end
